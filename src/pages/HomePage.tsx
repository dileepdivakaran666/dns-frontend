
import Banner from "../components/Banner";
import Content from "../components/Content";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box >
      <Banner />
      <Content />
    </Box>
  );
}


// import { useState } from "react";
// import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia, Box } from "@mui/material";
// import { styled } from "@mui/system";

// const categories = ["Food", "Drinks", "Brunch"];
// const menuItems = [
//   { name: "CINNAMON TOAST CRUNCH", price: "$16", description: "Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon", category: "Drinks", image: "/drink1.png" },
//   { name: "MOET SPRITZ", price: "$20", description: "Aperol, St. Germain, botanical liquor, fresh lime juice, mini brut Moet topper", category: "Drinks", image: "/drink2.png" },
//   { name: "BAR 42 MARY", price: "$14", description: "Titos, tomato juice, Worcestershire, celery salt, black pepper, tabasco, fully loaded", category: "Drinks", image: "/drink3.png" }
// ];

// const Background = styled("div")({
//   position: "relative",
//   padding: "100px 0",
//   textAlign: "center",
//   color: "white",
//   overflow: "hidden",
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",

//   "&::before": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "black", // Dark overlay
//     opacity: 0.5, // Adjust darkness (0 = no effect, 1 = fully black)
//     zIndex: 1,
//   },

//   "&::after": {
//     content: '""',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     background: "url('https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tb7WDB7SoR8Cf7bF-I1d1J~rzReowQizkYVNV141gLexW4WmcTvXJouSVvVU1JtFl~s35EagN536fE35wqQy5WQsk4w0zA~i~dy0meXXjqoEgXQSDggABqFm4Ih5kyEraKQQtP0MD87PYq9yXxcK0F3mUHtjFWMbWz6PZJZ5C55kBUm3jz2jgeRyujKgVZZvJa-c1XV5zgJQ4HeX~2Et3HKCtKqaiUkD2syxX7Qj-OfdPV6Y8pJJ9Z2-URudv2H1QBF5MEM7aQQDl9ZkVU0mOq7CBGLRjoqtJr9vjOmCuhBIc~cZKQJY3SzxTfXo0njQ-ju7LZn~iIbAiLWX4vWQRg__') top/cover no-repeat",
//     zIndex: 0, // Background stays behind the dark overlay
//   },
// });

// const Content = styled("div")({
//   position: "relative",
//   zIndex: 2, // Ensures text is above overlay
//   maxWidth: "80%", // Keeps text readable on larger screens
//   textAlign: "center",
// });

// export default function HomePage() {
//   const [selectedCategory, setSelectedCategory] = useState("Drinks");

//   return (
//     <>
//       <AppBar position="static" sx={{ background: "#000" }}>
//         <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <Box component="img" 
//               src="https://s3-alpha-sig.figma.com/img/22e3/1e48/6860545013e0a63ba8cb7e94004971f7?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QCsmYtO7FJDNfiBS-TsDQig7Tnc0WXc9MtxuWSPwv4b-COWgtD13hXo8g~TBsRsI2XiRlDeIxqsHL6Ni1gL~Xnj8InLq5Xp5hm87GQAiAUso45qH7XEgGqGtwt4a8bLDDgoxkmJrQ2YH2SYFcUEEzPGrlcgY1pNfcwCLuuntu8VnYhc0Tu-elx2DRCixdQs8R8KGH85zM-xqrxSHf~vMx1hgV8pGPzBv1kXSaEBOgBJJ7S33~1PupW3bzMwhBeptRLBQhcy49AWnDFOOHjG2lVqMBvIrWd0LSCYwQAPWCvdmnGAcbnPySjtkYvi35wWbxvLXpSued2zcS1M~HKpT6A__" // Update this with the correct path to your logo
//               alt="Deep Net Soft Logo"
//               sx={{ flexGrow:1, height: 40, maxWidth:150 }} // Adjust height as needed
//             />
            
//           <Box sx={{ display: "flex", gap: 3 }}>
//             <Button color="inherit">Home</Button>
//             <Button color="inherit">Menu</Button>
//             <Button color="inherit">Make a Reservation</Button>
//             <Button color="inherit">Contact Us</Button>
//         </Box>
//         </Toolbar>
//       </AppBar>

//       <Background>
//         <Content>
//         <Typography variant="h2">MENU</Typography>
//         <Typography variant="h6">Take a look at our menu featuring food, drinks, and brunch.If you'd like to place an order, use the "Order Online" button located below the menu.</Typography>
//         {categories.map((cat) => (
//           <Button key={cat} variant={selectedCategory === cat ? "contained" : "outlined"} color="primary" onClick={() => setSelectedCategory(cat)}>{cat}</Button>
//         ))}
//         </Content>
        
//       </Background>

//       <Container sx={{ py: 5 }}>
//         <Typography variant="h4" align="center" gutterBottom>{selectedCategory} Menu</Typography>
//         <Grid container spacing={4}>
//           {menuItems.filter(item => item.category === selectedCategory).map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item.name}>
//               <Card sx={{ background: "#222", color: "white" }}>
//                 <CardMedia component="img" height="200" image={item.image} alt={item.name} />
//                 <CardContent>
//                   <Typography variant="h6">{item.name} <span style={{ float: "right" }}>{item.price}</span></Typography>
//                   <Typography variant="body2">{item.description}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       <footer style={{ background: "#000", color: "white", padding: "20px 0", textAlign: "center" }}>
//         <Typography variant="h6">DEEP NET SOFT</Typography>
//         <Typography variant="body2">info@deepnetsoft.com | +91 9567834340</Typography>
//         <Typography variant="body2">© 2024 DeepNetSoft Solutions. All rights reserved.</Typography>
//       </footer>
//     </>
//   );
// }
