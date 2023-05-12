import { Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "9px 24px 9px 9px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

//Select reutilizável
export function Select({ nome, options, onChange, value, error }) {
  return (
    <div>
      <NativeSelect
        sx={{ width: 1 }}
        name={nome}
        value={value}
        onChange={onChange}
        input={<BootstrapInput />}
        options={options}
      >
        {options.map((op, i) => {
          return (
            <option key={i} value={i != 0 ? op : " "}>
              {op}
            </option>
          );
        })}
      </NativeSelect>
      <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem" }}>
        {error ? error.message : null}
      </Typography>
    </div>
  );
}
