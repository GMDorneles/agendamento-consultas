import { Button } from "@mui/material";
import { HorasDisponiveis } from "../constants/HorasDisponiveis";
import { Typography, Box } from "@mui/material";
import { DisponibilidadeAgendamento } from "../utils/disponibilidadeAgendamento";

export function SeletorData({ selecionar, valor }) {
  console.log(valor);
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
          <Box sx={{ width: 1 / 4 }}>
            <Typography>Dia</Typography>
          </Box>
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
              sx={{
                width: 1 / 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
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
                  sx={[
                    `${dia.dia} : ${hora}` == valor
                      ? {
                          border: 2,
                          borderColor: "rgb(75,78,252)!important",
                          padding: "3px",
                          width: "100%",
                          margin: "2px",
                          borderRadius: "5px",
                        }
                      : {
                          padding: "3px",
                          width: "100%",
                          margin: "2px",
                        },
                  ]}
                  key={index}
                >
                  <Button
                    sx={
                      DisponibilidadeAgendamento(`${dia.dia} : ${hora}`)
                        ? {
                            bgcolor: "rgb(111, 111, 120)!important",
                            opacity: "60%",
                          }
                        : {
                            bgcolor: "rgb(75,78,252)!important",
                          }
                    }
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
