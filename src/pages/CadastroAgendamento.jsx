import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import Input from "@mui/material/Input";
import { Calendario } from "../components/calendario";
import { useDispatch } from "react-redux";
import { criarAgendamento } from "../store/Agendamentos";

import { Select } from "../components/Select";

export function CadastroAgendamento() {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    dispatch(criarAgendamento(data));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ justifyContent: "center", display: "flex", padding: "15px" }}
    >
      <Box
        sx={{
          border: 1,
          borderRadius: "16px",
          borderColor: "rgb(223 219 219)",
          padding: "45px",
          width: "100%",
        }}
        m={6}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "rgb(75,78,252)" }}
        >
          Agendamentos
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "16px",
          }}
        >
          <Typography sx={{ color: "gray", fontSize: 15 }} mt={1} mb={1}>
            Cadastro
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} mt={3} mb={3}>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "2px",
                }}
              >
                <Controller
                  name="nome"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      placeholder="*Nome"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="cpf"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      type="number"
                      placeholder="*CPF"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="cartaoSUS"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      placeholder="*Cartão do SUS"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="motivoAtendimento"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      placeholder="*Motivo do atendimento"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>

            <Grid item xs={5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="medicoAtendente"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      placeholder="*Médico atendente"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="profissionalAgendamento"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      sx={{
                        width: "100%",
                        border: 1,
                        borderRadius: "4px",
                        borderColor: "rgb(223 219 219)",
                        padding: "6px",
                      }}
                      placeholder="*Profissional do Agendamento"
                      variant="outlined"
                      size="small"
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="urgencia"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Select
                      nome={"urgencia"}
                      options={[
                        "*Urgência",
                        "baixa",
                        "media",
                        "alta",
                        "urgente",
                      ]}
                      onChange={onChange}
                      value={value}
                      error={error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  name="data"
                  control={control}
                  defaultValue=""
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Calendario
                      value={value}
                      onChange={onChange}
                      error={!!error}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "5px",
              alignSelf: "flex-end",
            }}
          >
            <Button
              type="submit"
              sx={{
                bgcolor: "rgb(75,78,252)",
                borderRadius: "10px",
                maxHeight: "80px",
              }}
            >
              <Typography
                sx={{ fontWeight: "bold", color: "white", fontSize: 10 }}
                py={1}
                px={2}
              >
                Salvar
              </Typography>
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
