import { Box, Button, Typography } from "@mui/material";
import { HorasDisponiveis } from "../constants/HorasDisponiveis";
import { DisponibilidadeAgendamento } from "../utils/disponibilidadeAgendamento";

//Mostra datas liberadas para agendamento
export function SeletorData({ selecionar, valor }) {
  const largura = window.screen.width;
  return (
    <div>
      <Typography mt={1}>Selecione o dia desejado</Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            borderBottom: 1,
            borderColor: "rgb(223 219 219)",
          }}
        >
          <Box sx={{ width: 1 / 4 }}>
            <Typography>Data</Typography>
          </Box>
          {largura > 700 && (
            <Box sx={{ width: 1 / 4 }}>
              <Typography>Dia</Typography>
            </Box>
          )}
          <Box sx={{ width: 1 / 3 }}>
            <Typography ml={2}>Horas</Typography>
          </Box>
        </Box>
        {HorasDisponiveis.map((dia, i) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              borderBottom: 1,
              borderColor: "rgb(223 219 219)",
            }}
            key={i}
          >
            <Box
              sx={[
                largura > 700
                  ? { flexDirection: "row" }
                  : { flexDirection: "column" },
                {
                  width: 1 / 2,
                  display: "flex",
                },
              ]}
            >
              <Box
                sx={{
                  width: 1 / 2,
                }}
              >
                <Typography sx={{ color: "rgb(120, 120, 124)" }}>
                  {dia.dia}
                </Typography>
              </Box>
              <Box
                sx={{
                  width: 1 / 2,
                }}
              >
                <Typography sx={{ color: "rgb(120, 120, 124)" }}>
                  {dia.diaSemana}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {dia.horas.map((hora, index) => (
                <Box
                  sx={{
                    padding: "3px",
                    width: "100%",
                    margin: "2px",
                  }}
                  key={index}
                >
                  <Button
                    sx={[
                      { padding: "5px" },
                      `${dia.dia} : ${hora}` == valor
                        ? {
                            border: 3,
                            borderColor: "rgb(0, 10, 207)!important",
                            boxShadow: 2,
                            width: "100%",
                            margin: "2px",
                            borderRadius: "5px",
                          }
                        : {
                            width: "100%",
                            margin: "2px",
                          },
                      DisponibilidadeAgendamento(`${dia.dia} : ${hora}`)
                        ? {
                            bgcolor: "rgb(111, 111, 120)!important",
                            opacity: "60%",
                          }
                        : {
                            bgcolor: "rgb(75,78,252)!important",
                          },
                    ]}
                    //Verifica de a data está ocupada
                    disabled={DisponibilidadeAgendamento(
                      `${dia.dia} : ${hora}`
                    )}
                    onClick={() => selecionar(`${dia.dia} : ${hora}`)}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", color: "white", fontSize: 10 }}
                    >
                      {hora}
                    </Typography>
                  </Button>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
}
