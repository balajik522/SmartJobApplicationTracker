import TextField from "@mui/material/TextField";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      fullWidth
      label="Search Applications"
      variant="outlined"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      sx={{
        marginBottom: "20px",
        backgroundColor: "white",
      }}
    />
  );
}

export default SearchBar;