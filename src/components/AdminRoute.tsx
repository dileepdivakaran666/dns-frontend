import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CircularProgress, Box } from "@mui/material";

const AdminRoute = () => {
  const { userProp, loading } = useAuth();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  return userProp.role === "admin" ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default AdminRoute;
