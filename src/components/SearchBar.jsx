import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (element) => {
    element.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      sx={{ borderRadius: 20, border: "1px solid #e3e3e3", pl: 2, boxShadow: "none", mr: { sm: 5 } }}
      component="form"
    >
      <input
        onChange={(event) => setSearchTerm(event.target.value)}
        value={searchTerm}
        type="text"
        className="search-bar"
        placeholder="Search..."
      />
      <IconButton
        sx={{ p: "10px", color: "red" }}
        type="submit"
      >
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
