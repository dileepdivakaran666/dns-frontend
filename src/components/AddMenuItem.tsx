import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { addMenuItem } from "../service/apiService"; // Import API function

interface AddMenuItemProps {
  categoryId: string;
  open: boolean;
  onClose: () => void;
  onItemAdded: () => void; // Refresh list after adding
}

const AddMenuItem: React.FC<AddMenuItemProps> = ({ categoryId, open, onClose, onItemAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddItem = async () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      setError("All fields are required!");
      return;
    }
    if (isNaN(Number(price)) || Number(price) <= 0) {
      setError("Price must be a valid number!");
      return;
    }

    setLoading(true);
    try {
      await addMenuItem(categoryId, { name, description, price: Number(price) });
      onItemAdded(); // Refresh menu list
      onClose(); // Close the modal
      setName("");
      setDescription("");
      setPrice("");
    } catch (err) {
      console.error("Error adding menu item:", err);
      setError("Failed to add item. Try again!");
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Add New Menu Item</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="dense"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="dense"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          margin="dense"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={handleAddItem} color="primary" variant="contained" disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMenuItem;
