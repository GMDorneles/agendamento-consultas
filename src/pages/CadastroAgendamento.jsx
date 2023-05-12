import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { InputTexto } from "../components/InputComponente";
import { Select } from "../components/Select";
import { Calendario } from "../components/calendario";
import { criarAgendamento, editarAgendamento } from "../store/Agendamentos";
import { validarCpf } from "../utils/validarCpf";

export function CadastroAgendamento() {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm();
  const { state } = useLocation();

  const onSubmit = (data) => {
    if (state?.data) {
      const agendamentosData = { id: state?.data?.id, ...data };
      dispatch(editarAgendamento(agendamentosData));
    } else {
      dispatch(criarAgendamento(data));
    }
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

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignContent: "center",
            }}
          >
            <Link to={"/"}>
              <Typography sx={{ color: "gray", fontSize: 15 }} mb={1}>
                Listagem
              </Typography>
            </Link>
            <ArrowForwardIosIcon
              sx={{ color: "gray", fontSize: 16, marginTop: "3px" }}
            />
            {state?.data ? (
              <Typography sx={{ color: "gray", fontSize: 15 }} mb={1}>
                Edição
              </Typography>
            ) : (
              <Typography sx={{ color: "gray", fontSize: 15 }} mb={1}>
                Cadastro
              </Typography>
            )}
          </Box>
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
                  defaultValue={state?.data?.nome}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*Nome"
                      value={value}
                      onChange={onChange}
                      error={error}
                      tipo={"text"}
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
                  defaultValue={state?.data?.cpf}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*CPF"
                      value={value?.replace(/\D/g, "")}
                      onChange={onChange}
                      error={error}
                      maxCaracteres={11}
                      validacao={validarCpf}
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
                  defaultValue={state?.data?.cartaoSUS}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*Cartão do SUS"
                      value={value?.replace(/\D/g, "")}
                      onChange={onChange}
                      error={error}
                      maxCaracteres={15}
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
                  defaultValue={state?.data?.motivoAtendimento}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*Motivo do atendimento"
                      value={value}
                      onChange={onChange}
                      error={error}
                      tipo={"text"}
                    />
                  )}
                  rules={{ required: "Campo obrigatório" }}
                />
              </Box>
            </Grid>

            <Grid item xs={5}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Controller
                  defaultValue={state?.data?.medicoAtendente}
                  name="medicoAtendente"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*Médico atendente"
                      value={value}
                      onChange={onChange}
                      error={error}
                      tipo={"text"}
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
                  defaultValue={state?.data?.profissionalAgendamento}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <InputTexto
                      nome="*Profissional do Agendamento"
                      value={value}
                      onChange={onChange}
                      error={error}
                      tipo={"text"}
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
                  defaultValue={state?.data?.urgencia}
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
                  defaultValue={state?.data?.data}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Calendario
                      value={value}
                      onChange={onChange}
                      error={error}
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
