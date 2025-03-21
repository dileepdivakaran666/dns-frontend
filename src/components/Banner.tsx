import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Background = styled("div")({
  position: "relative",
  padding: "100px 0",
  textAlign: "center",
  color: "white",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black", // Dark overlay
    opacity: 0.5, // Adjust darkness (0 = no effect, 1 = fully black)
    zIndex: 1,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "url('https://s3-alpha-sig.figma.com/img/aefd/7aa0/f81b6208cb3da0f5ecc0f0d109ca4bd0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tb7WDB7SoR8Cf7bF-I1d1J~rzReowQizkYVNV141gLexW4WmcTvXJouSVvVU1JtFl~s35EagN536fE35wqQy5WQsk4w0zA~i~dy0meXXjqoEgXQSDggABqFm4Ih5kyEraKQQtP0MD87PYq9yXxcK0F3mUHtjFWMbWz6PZJZ5C55kBUm3jz2jgeRyujKgVZZvJa-c1XV5zgJQ4HeX~2Et3HKCtKqaiUkD2syxX7Qj-OfdPV6Y8pJJ9Z2-URudv2H1QBF5MEM7aQQDl9ZkVU0mOq7CBGLRjoqtJr9vjOmCuhBIc~cZKQJY3SzxTfXo0njQ-ju7LZn~iIbAiLWX4vWQRg__') top/cover no-repeat",
    zIndex: 0, // Background stays behind the dark overlay
  },
});

const Content = styled("div")({
  position: "relative",
  zIndex: 2, // Ensures text is above overlay
  maxWidth: "80%", // Keeps text readable on larger screens
  textAlign: "center",
});

export default function Banner() {
  return (
    <Background>
      <Content>
         <Typography variant="h2">MENU</Typography>
         <Typography variant="h6">Take a look at our menu featuring food, drinks, and brunch.If you'd like to place an order, use the "Order Online" button located below the menu.</Typography>
        </Content>
    </Background>
  );
}
