import { Box, Button, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#ffffff",
  borderRadius: "16px",
  border: "2px solid #eae6e6",
  boxShadow: 24,
  p: 4,
};
//Modal reutilizável para avisos
export function ModalAviso({ estadoModal, fechar, aviso }) {
  //tamanho da tela
  const largura = window.screen.width;

  return (
    <Modal
      open={estadoModal}
      onClose={fechar}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={[style, largura > 800 ? { width: 1 / 6 } : { width: 1 / 2 }]}>
        <Box sx={{ display: "flex", justifyContent: "center" }} mb={1}>
          <Typography
            sx={{
              fontSize: 20,
              color: "rgb(119, 118, 118)",
            }}
            id="modal-modal-title"
          >
            {aviso}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }} mt={2}>
          <Button
            onClick={fechar}
            sx={{
              bgcolor: "rgb(75,78,252)",
              borderRadius: "10px",
              maxHeight: "100px",
            }}
          >
            <Typography
              sx={{ fontWeight: "bold", color: "white", fontSize: 10 }}
              py={1}
              px={2}
            >
              Ok
            </Typography>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
