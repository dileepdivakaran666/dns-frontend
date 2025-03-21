import { Container, Typography } from "@mui/material";

function NotFound() {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" color="error">
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">Sorry, the page you are looking for does not exist.</Typography>
    </Container>
  );
}

export default NotFound;
