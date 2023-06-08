import NextLink from "next/link";

import { AppBar, IconButton, Toolbar, Typography, Link } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlined />
        </IconButton>
        <NextLink href="/" passHref legacyBehavior>
          <Link>
            <Typography variant="h6" color="white">
              Cookie Master
            </Typography>
          </Link>
        </NextLink>
        <div style={{ flex:1 }} />
        <NextLink href="/theme-changer" passHref legacyBehavior>
          <Link>
            <Typography variant="h6" color="white">
              Cambiar tema
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
