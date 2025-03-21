import { useEffect, useState } from "react";
import { getCategories, deleteMenuService } from "../service/apiService";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid, Box, Stack } from "@mui/material";

const AdminDashboard = () => {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deleteMenu = async(id:string)=>{
    try{
        await deleteMenuService(id)
        navigate('/admin')
    }catch(error:any){
        alert(error.message)
    }
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 10, pt:5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color:"white" }}>Admin Dashboard</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate("/admin/add-menu")}>Add Menu</Button>
      </Stack>

      <Typography variant="h5" sx={{ mb: 3 }}>Menu Categories</Typography>

      <Grid container spacing={2}>
        {categories?.map((cat) => (
          <Grid item xs={12} key={cat._id}>
            <Card sx={{ p: 2, boxShadow: 2 }}>
              <CardContent>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                  <Typography variant="h6">{cat.name}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" color="primary" size="small" onClick={() => navigate(`/admin/view-menu/${cat._id}`)}>View</Button>
                    <Button variant="contained" color="success" size="small" onClick={() => navigate(`/admin/add-menu-item/${cat._id}`)}>Add Menu Item</Button>
                    <Button variant="contained" color="error" size="small" onClick={()=>deleteMenu(cat._id)}>Delete</Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
