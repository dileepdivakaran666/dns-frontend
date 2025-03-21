
import { Box, Typography, Grid, Link,IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        display:'flex',
        mt:20,
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Grid container justifyContent="center"  sx={{p:{xs:0, sm:4}}}>
        {/* Connect with Us Section */}
        <Grid item xs={12} sm={6} md={4} sx={{
            border: "2px solid white", // Add a white border
            borderRadius: 2, // Optional: Add rounded corners
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
            justifyContent: "center", 
        }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
            CONNECT WITH US
          </Typography>
          <Typography variant="body1">
            <Link href="tel:+919567843340" color="inherit" underline="hover">
              +91 9567843340
            </Link>
          </Typography>
          <Typography variant="body1">
            <Link
              href="mailto:info@deepnetsoft.com"
              color="inherit"
              underline="hover"
            >
              info@deepnetsoft.com
            </Link>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}
    sx={{
        border: "2px solid white", // Add a white border
        borderRadius: 2, // Optional: Add rounded corners
        padding: 2, // Add padding inside the border
        position: 'relative', // Needed for absolute positioning of the image
    }}
>
    {/* Picture */}
    <Box
        sx={{
            position: 'absolute', // Position the image absolutely
            width: '100%',
            height: 'auto',
            display: "flex", 
            justifyContent: "center",
            alignItems:'center',
            zIndex:1
        }}
    >
        <img
            src={'https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QCsmYtO7FJDNfiBS-TsDQig7Tnc0WXc9MtxuWSPwv4b-COWgtD13hXo8g~TBsRsI2XiRlDeIxqsHL6Ni1gL~Xnj8InLq5Xp5hm87GQAiAUso45qH7XEgGqGtwt4a8bLDDgoxkmJrQ2YH2SYFcUEEzPGrlcgY1pNfcwCLuuntu8VnYhc0Tu-elx2DRCixdQs8R8KGH85zM-xqrxSHf~vMx1hgV8pGPzBv1kXSaEBOgBJJ7S33~1PupW3bzMwhBeptRLBQhcy49AWnDFOOHjG2lVqMBvIrWd0LSCYwQAPWCvdmnGAcbnPySjtkYvi35wWbxvLXpSued2zcS1M~HKpT6A__'}
            alt="Logo"
            style={{ width: "80%", height: "auto" }}
        />
    </Box>

    {/* Social Media Links */}
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: '50%' }}>
        <IconButton
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
        >
            <FacebookIcon />
        </IconButton>
        <IconButton
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
        >
            <TwitterIcon />
        </IconButton>
        <IconButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
        >
            <InstagramIcon />
        </IconButton>
        <IconButton
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
        >
            <LinkedInIcon />
        </IconButton>
    </Box>
        </Grid>

        {/* Find Us Section */}
        <Grid item xs={12} sm={6} md={4}
        sx={{
            border: "2px solid white", // Add a white border
            borderRadius: 2, // Optional: Add rounded corners
            padding: 2, 
            display: "flex",
            flexDirection: "column", 
            alignItems: "center",
            justifyContent: "center", 
        }}
        >
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }} gutterBottom>
            FIND US
          </Typography>
          <Typography variant="body1">
            First floor, Geo Infopark,
            <br />
            Infopark EXPY, Kakkanad
          </Typography>
        </Grid>
      </Grid>
      {/* Company Name Section */}
    </Box>
    <Box
  sx={{
    backgroundColor: "black",
    color: "grey",
    padding: 6,
    textAlign: "center",
  }}
>
  <Grid container justifyContent="space-between" alignItems="center">
    <Grid item>
      <Typography variant="body2">
        © 2024 Deepnetsoft Solutions. All rights reserved
      </Typography>
    </Grid>
    <Grid item>
      <Typography variant="body2">Terms And Conditions</Typography>
    </Grid>
  </Grid>
</Box>
    </>
  );
};

export default Footer;