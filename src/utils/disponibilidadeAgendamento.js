import { useSelector } from "react-redux";

export function DisponibilidadeAgendamento(dataHora) {
    const agendamentoLista = useSelector((state) => state.agendamentos.value);
    const dataOcupada = agendamentoLista.filter(
        (agendamento) => agendamento.data.includes(dataHora)
    );
    if (dataOcupada.length >= 1) {
        return true;
    }
    return false;
}