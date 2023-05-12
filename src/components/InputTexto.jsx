import Input from "@mui/material/Input";
import { Typography } from "@mui/material";

export function InputTexto({ nome, onChange, value, error, tipo }) {
  console.log(error);
  return (
    <div>
      <Input
        sx={{
          width: "100%",
          border: 1,
          borderRadius: "4px",
          borderColor: "rgb(223 219 219)",
          padding: "6px",
        }}
        placeholder={nome}
        size="small"
        value={value}
        onChange={onChange}
        error={!!error}
        type={tipo}
      />
      <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem" }}>
        {error ? error.message : null}
      </Typography>
    </div>
  );
}
