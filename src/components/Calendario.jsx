import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export function Calendario({ onChange, value, error }) {
  const classes = useStyles();

  const minDateTime = new Date();
  minDateTime.setHours(1);

  return (
    <form className={classes.container} noValidate>
      <TextField
        onChange={onChange}
        value={value}
        error={error}
        sx={{ width: 1 }}
        id="datetime-local"
        label="Data e hora da consulta"
        type="datetime-local"
        initialValue="2023-05-04T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          min: minDateTime.toISOString().slice(0, 16),
        }}
      />
      <Typography sx={{ color: "#d32f2f", fontSize: "0.75rem" }}>
        {error ? error.message : null}
      </Typography>
    </form>
  );
}
