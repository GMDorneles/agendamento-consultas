import { Typography } from "@mui/material";
import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";

const BootstrapInput = styled(Input)(() => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}));

export function InputTexto({
  nome,
  onChange,
  value,
  error,
  tipo,
  maxCaracteres,
  validacao,
}) {
  const errosValidacao =
    value.length >= maxCaracteres && validacao != undefined
      ? validacao(value)
      : true;

  return (
    <div>
      <BootstrapInput
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
        inputProps={{ maxLength: maxCaracteres }}
      />
      <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem" }}>
        {error ? error.message : null}
        {errosValidacao == false ? " Valor inválido" : null}
      </Typography>
    </div>
  );
}
