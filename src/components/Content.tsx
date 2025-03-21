import { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import CategoryButtons from "./CategoryButton";
import { getCategories, getMenuItemById } from "../service/apiService";

function Content() {
  const [categories, setCategories] = useState<{ _id: string; name: string }[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [menuItems, setMenuItems] = useState<any[]>([]);

  // Fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
  
        setCategories(fetchedCategories); // State update is asynchronous
  
        if (fetchedCategories.length > 0) {
          setSelectedCategory(fetchedCategories[0]._id); // Set first category by default
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []);
  
  useEffect(() => {
  }, [categories]);
  

  // Fetch menu items when selectedCategory changes
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchMenuItems = async () => {
      try {
        const fetchedMenuItems = await getMenuItemById(selectedCategory);
        setMenuItems(fetchedMenuItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, [selectedCategory]);

  return (
    <Container >
      {/* Pass categories and selectedCategory state to the button component */}
      
      <CategoryButtons
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
        <Box sx={{backgroundColor: "black", // Black background
            m: { xs: 0, sm: 8 },
            border: "2px solid white", // White border
            borderRadius: 2, // Optional: Add rounded corners
            padding: 4, // Optional: Add padding inside the Box
        }}>
        <Grid container spacing={3}>
        {menuItems?.map((item) => (
          <Grid item xs={12} sm={6} md={6} key={item.name}>
            <Card sx={{ background: "black", color: "white" }}>
              <CardMedia />
              <CardContent>
                <Typography variant="h6">
                  {item.name} <span style={{ float: "right" }}>${item.price}</span>
                </Typography>
                <Typography variant="body2"sx={{
                    color: "grey", // Change the text color (e.g., gold)
                    fontFamily: "'Comic Sans MS', cursive, sans-serif", // Use a funny font family
                 }}>
                    {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        </Box>
      
    </Container>
  );
}

export default Content;
