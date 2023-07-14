import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}
      direction="row"
    >
      {categories.map(({ name, icon }, index) => (
        <button
          onClick={() => setSelectedCategory(name)}
          key={index}
          style={{ background: name === selectedCategory && "#fc1503", color: "white" }}
          className="category-btn"
        >
          <span style={{ color: name === selectedCategory ? "white" : "red", marginRight: "15px" }}>{icon}</span>
          <span style={{ opacity: name === selectedCategory ? "1" : "0.8" }}>{name}</span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
