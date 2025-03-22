
import { Box, Typography} from "@mui/material";
const ContactUs = () => {
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
      <Typography variant="h4" sx={{width: '50%'}}>Contact Us Page</Typography>
</Box>
    </>
  );
};

export default ContactUs;