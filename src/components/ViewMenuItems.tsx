import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMenuItemById, deleteMenuItem, updateMenuItem } from "../service/apiService";
import { Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddMenuItem from "./AddMenuItem";
import EditMenuItem from "./EditMenuItem";

interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    menu: string; 
  }

const ViewMenuItems = () => {
  const { categoryId } = useParams<{ categoryId: string }>(); // Get categoryId from URL
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [open, setOpen] = useState(false); // State to manage the Add popup
  const [editOpen, setEditOpen] = useState(false); // State to manage the Edit popup
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null); // State to store the selected item for editing

  useEffect(() => {
    fetchMenuItems();
  }, [categoryId]);

  const fetchMenuItems = async () => {
    try {
      const data = await getMenuItemById(categoryId as string);
      setMenuItems(data);
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  const handleDelete = async (itemId: string) => {
    try {
      await deleteMenuItem(itemId); // Call the delete API
      alert('deleted Successfully')
      fetchMenuItems(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  const handleEditClick = (item: MenuItem) => {
    setSelectedItem(item); // Set the selected item for editing
    setEditOpen(true); // Open the Edit popup
  };

  const handleSaveEdit = async (updatedItem: MenuItem) => {
    try {
      await updateMenuItem(updatedItem); // Call the update API
      fetchMenuItems(); // Refresh the list after updating
    } catch (error) {
      console.error("Error updating menu item:", error);
    }
  };

  return (
    <div style={{marginTop:"20px", backgroundColor:"white"}}>
        <Typography variant="h2" color="initial">Menu Items</Typography>
      <Button variant="contained" sx={{mt:5,ml:20}} color="primary" onClick={() => setOpen(true)}>
        Add Menu Item
      </Button>
      <List sx={{ml:{xs:0,sm:20},mr:{xs:0,sm:20}}}>
        {menuItems.map((item) => (
          <ListItem key={item._id}>
            <ListItemText primary={`${item.name} - $${item.price}`} secondary={item.description} />
            <ListItemSecondaryAction>
              {/* Edit Button */}
              <IconButton edge="end" aria-label="edit" onClick={() => handleEditClick(item)}>
                <EditIcon sx={{color:"blue"}}/>
              </IconButton>
              {/* Delete Button */}
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(item._id)}>
                <DeleteIcon sx={{color:"red"}}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

      {/* Add Menu Item Popup */}
      <AddMenuItem
        categoryId={categoryId as string}
        open={open}
        onClose={() => setOpen(false)}
        onItemAdded={fetchMenuItems}
      />

      {/* Edit Menu Item Popup */}
      {
        selectedItem &&<EditMenuItem
        open={editOpen}
        onClose={() => setEditOpen(false)}
        item={selectedItem}
        onSave={handleSaveEdit}
      />
      }
    </div>
  );
};

export default ViewMenuItems;