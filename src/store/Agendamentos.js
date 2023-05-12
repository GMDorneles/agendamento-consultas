import { createSlice } from "@reduxjs/toolkit";
import { agendamentosDados } from "../constants/AgendamentosDados";

export const agendamentoSlice = createSlice({
    name: "agendamentos",
    initialState: { value: agendamentosDados },
    reducers: {
        criarAgendamento: (state, action) => {
            //gerando id para o  novo dado
            const id = Math.random();
            const agendamentosData = { id: id, ...action.payload };
            state.value.push(agendamentosData);
        },
        editarAgendamento: (state, action) => {
            state.value.map((agendamento) => {
                if (agendamento.id === action.payload.id) {
                    agendamento.nome = action.payload.nome;
                    agendamento.cpf = action.payload.cpf;
                    agendamento.cartaoSUS = action.payload.cartaoSUS;
                    agendamento.motivoAtendimento = action.payload.motivoAtendimento;
                    agendamento.data = action.payload.data;
                    agendamento.urgencia = action.payload.urgencia;
                    agendamento.medicoAtendente = action.payload.medicoAtendente;
                    agendamento.profissionalAgendamento = action.payload.profissionalAgendamento;
                }
            });
        },
    }
});
export const { criarAgendamento, editarAgendamento } = agendamentoSlice.actions;
export default agendamentoSlice.reducer;