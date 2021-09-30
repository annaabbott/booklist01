import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Header() {
  return (
    <React.Fragment>
        <CssBaseline />
        <Container >
            <Box sx={{height:"50px"}}/>
      <h1>Drug Store Cosmetics</h1>
      </Container>
    </React.Fragment>
  );
}

export default Header;
