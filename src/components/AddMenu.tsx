import { useState } from "react";
import { addMenuCategory } from "../service/apiService";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";

const AddMenu = () => {
  const [menu, setMenu] = useState({ name: "", description: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!menu.name.trim() || !menu.description.trim()) {
      alert("Both fields are required!");
      return;
    }

    try {
      await addMenuCategory(menu);
      navigate("/admin");
    } catch (error) {
      console.error("Error adding menu:", error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", mt: 10, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor:"white" }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Add New Menu</Typography>
      <TextField fullWidth label="Menu Name" name="name" value={menu.name} onChange={handleChange} sx={{ mb: 2 }} />
      <TextField fullWidth label="Description" name="description" value={menu.description} onChange={handleChange} sx={{ mb: 2 }} />
      <Stack direction="row" spacing={2}>
        <Button variant="contained" color="secondary" onClick={() => navigate("/admin")}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Add</Button>
      </Stack>
    </Box>
  );
};

export default AddMenu;
