import { Link } from "react-router-dom";
import { Tabela } from "../components/Tabela";
import { useState } from "react";
import { Box, Button, Container, Typography, TextField } from "@mui/material";
import { useSelector } from "react-redux";

export function Home() {
  const [busca, setBusca] = useState("");
  //Buscando lista de agendamentos do reducer
  const agendamentoLista = useSelector((state) => state.agendamentos.value);

  //filtrando conforme o input de busca
  const filterAgendamentos =
    busca?.length > 0
      ? agendamentoLista.filter(
          (agendamento) =>
            agendamento.nome.toUpperCase().includes(busca.toUpperCase()) ||
            agendamento.cpf.includes(busca)
        )
      : agendamentoLista;

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
            Listagem
          </Typography>
          <Link to={"/form"}>
            <Button
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
                Novo Agendamento
              </Typography>
            </Button>
          </Link>
        </Box>
        <Box mt={2} mb={2}>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Buscar agendamentos por nome ou CPF"
            variant="outlined"
            size="small"
            onChange={(e) => setBusca(e.target.value)}
          />
        </Box>

        <Tabela agendamentos={filterAgendamentos} />
      </Box>
    </Container>
  );
}
