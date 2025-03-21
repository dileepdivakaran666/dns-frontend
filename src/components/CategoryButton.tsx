import { Button, Box } from "@mui/material";

type CategoryButtonsProps = {
  categories: any[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

function CategoryButtons({ categories, selectedCategory, onCategoryChange }: CategoryButtonsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        justifyContent:"center",
        mb: 3,
        backgroundColor:"black",
        overflowX: "auto", // Enable horizontal scrolling
        paddingBottom: 2, // Add some padding to avoid cutting off the scrollbar
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "primary.main",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "background.paper",
        },
      }}
    >
      {categories.map((cat) => (
        <Button
          key={cat._id}
          variant={selectedCategory === cat._id ? "contained" : "outlined"}
          color="primary"
          onClick={() => onCategoryChange(cat._id)}
          sx={{
            flexShrink: 0, // Prevent buttons from shrinking
            fontSize: { xs: "0.875rem", sm: "1rem", md: "1.2rem" }, // Responsive font size
            whiteSpace: "nowrap", // Prevent text from wrapping
            overflow: "hidden", // Hide overflow
            textOverflow: "ellipsis", // Add ellipsis for long text
            maxWidth: "200px", // Set a max width for buttons
            backgroundColor: selectedCategory === cat._id ? "primary.main" : "black",
            color: "common.white",
            "&:hover": {
              backgroundColor: "primary.dark",
              color: "common.white",
            },
          }}
        >
          {cat.name}
        </Button>
      ))}
    </Box>
  );
}

export default CategoryButtons;