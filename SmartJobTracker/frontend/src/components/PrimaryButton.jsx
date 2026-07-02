import Button from "@mui/material/Button";

function PrimaryButton({
  children,
  onClick,
  color = "primary",
  variant = "contained",
}) {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
      }}
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;