import { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

 interface MenuItem {
    _id: string;
    name: string;
    description: string;
    price: number;
    menu: string; 
  }

interface EditMenuItemProps {
  open: boolean;
  onClose: () => void;
  item: MenuItem | null;
  onSave: (item: MenuItem) => void;
}

const EditMenuItem = ({ open, onClose, item, onSave }: EditMenuItemProps) => {
  const [name, setName] = useState(item?.name || "");
  const [description, setDescription] = useState(item?.description || "");
  const [price, setPrice] = useState(item?.price.toString() || "");

  const handleSave = () => {
    if (!item) return;

    onSave({
      ...item,
      name,
      description,
      price: parseFloat(price),
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Menu Item</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          label="Price"
          fullWidth
          margin="normal"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMenuItem;