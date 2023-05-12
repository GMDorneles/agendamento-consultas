import { createSlice } from "@reduxjs/toolkit";
import { agendamentosDados } from "../constants/AgendamentosDados";

export const agendamentoSlice = createSlice({
    name: "agendamentos",
    initialState: { value: agendamentosDados },
    reducers: {
        criarAgendamento: (state, action) => {
            const id = Math.random();
            const agendamentosData = { id: id, ...action.payload };
            state.value.push(agendamentosData);
        },
        editarAgendamento: (state, action) => {
            state.value.map((agendamento) => {
                if (agendamento.id === action.payload.id) {
                    agendamento.nome = action.payload.nome;
                }
            });
        },
    }
});
export const { criarAgendamento, editarAgendamento } = agendamentoSlice.actions;
export default agendamentoSlice.reducer;