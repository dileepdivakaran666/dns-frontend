import { useParams, useNavigate } from "react-router-dom";
import AddMenuItem from "../components/AddMenuItem";

const AddMenuItemWrapper = () => {
  const { categoryId } = useParams(); // Get categoryId from URL
  const navigate = useNavigate();

  if (!categoryId) {
    return <p>Invalid Category</p>; // Handle invalid cases
  }

  return (
    <AddMenuItem
      categoryId={categoryId}
      open={true} // You can manage this with state if needed
      onClose={() => navigate(-1)} // Go back to the previous page on close
      onItemAdded={() => navigate(`/admin/view-menu/${categoryId}`)} // Redirect after adding
    />
  );
};

export default AddMenuItemWrapper;
