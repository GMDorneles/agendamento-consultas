import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  minDateTime.setHours(17);
  const maxDateTime = new Date();
  maxDateTime.setHours(20);

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
          max: maxDateTime.toISOString().slice(0, 16),
        }}
      />
    </form>
  );
}
