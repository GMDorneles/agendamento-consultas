import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { mascaraCpf } from "../utils/mascaraCpf";

const columns = [
  {
    id: "nome",
    label: "Nome",
    minWidth: 90,
    align: "left",
  },
  {
    id: "cpf",
    label: "CPF",
    minWidth: 110,
    align: "left",
    format: (value) => {
      return mascaraCpf(value);
    },
  },
  {
    id: "cartaoSUS",
    label: "Cartão SUS",
    minWidth: 70,
    align: "left",
  },
  {
    id: "motivoAtendimento",
    label: "Motivo do Atendimento",
    minWidth: 100,
    align: "left",
  },
  {
    id: "data",
    label: "Data",
    minWidth: 120,
    align: "left",
  },
  {
    id: "urgencia",
    label: "Urgência",
    minWidth: 50,
    align: "left",
  },
  {
    id: "medicoAtendente",
    label: "Médico Atendente",
    minWidth: 100,
    align: "left",
  },
  {
    id: "profissionalAgendamento",
    label: "Agendado Por",
    minWidth: 100,
    align: "left",
  },
];

export function Tabela({ agendamentos }) {
  const [pag, setPag] = useState(0);
  const [linhasPag, setLinhasPag] = useState(5);

  const mudarPag = (event, novaPag) => {
    setPag(novaPag);
  };

  //quantas linhas serão exibidas na tabela
  const mudarLinhasPag = (event) => {
    setLinhasPag(+event.target.value);
    setPag(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 580 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agendamentos
              .slice(pag * linhasPag, pag * linhasPag + linhasPag)
              .map((agendamento, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = agendamento[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                    <TableCell align={"right"}>
                      <Link
                        to="/form"
                        state={{
                          data: agendamento,
                        }}
                      >
                        <Button>
                          <EditIcon sx={{ color: "black", fontSize: 20 }} />
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={agendamentos?.length}
        rowsPerPage={linhasPag}
        page={pag}
        onPageChange={mudarPag}
        onRowsPerPageChange={mudarLinhasPag}
      />
    </Paper>
  );
}
