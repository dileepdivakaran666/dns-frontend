
import { Box, Typography} from "@mui/material";
const Reservation = () => {
  return (
    <>
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        display:'flex',
        mt:10,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Typography variant="h1">Reservation Page</Typography>
</Box>
    </>
  );
};

export default Reservation;