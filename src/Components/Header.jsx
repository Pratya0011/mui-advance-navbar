import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";

function Header() {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const arr = ["Products", "Services", "ContactUS", "AboutUs"];
  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem", paddingLeft: "10%" }}>
                Shoppe
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
                sx={{marginLeft:'auto'}}
              >
                {arr.map((item, index) => (
                  <Tab label={item} key={index}></Tab>
                ))}
              </Tabs>
              <Button variant="contained" sx={{ marginLeft: "auto" }}>
                Login
              </Button>
              <Button variant="contained" sx={{ marginLeft: "10px" }}>
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
