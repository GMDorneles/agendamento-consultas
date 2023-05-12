import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  {
    id: "nome",
    label: "Nome",
    minWidth: 100,
    align: "left",
  },
  {
    id: "cpf",
    label: "CPF",
    minWidth: 70,
    align: "left",
    //cpf mask
    //format: (value) => value.toLocaleString("en-US"),
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
    minWidth: 100,
    align: "left",
  },
  {
    id: "urgencia",
    label: "Urgência",
    minWidth: 100,
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
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
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Editar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {agendamentos
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((agendamento, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column) => {
                      const value = agendamento[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>Edit icon</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={agendamentos.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
