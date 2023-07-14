import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Stack
      sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", zIndex: 100 }}
      p={2}
      direction="row"
      alignItems="center"
    >
      <Link
        style={{ display: "flex", alignItems: "center" }}
        to="/"
      >
        <img
          src={logo}
          height={45}
          alt="Header Logo"
        />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
