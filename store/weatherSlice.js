import { createSlice } from "@reduxjs/toolkit";

const searchHistory = createSlice({
    name: 'searchHistory',
    initialState: {
        historys: [],
        modal: false 
    },
    reducers: {
        addToHistory(state, action) {
            state.historys.push({
                id: state.historys.length + 1,
                title: action.payload.title,
                date: action.payload.date
            })
        },
        clearHistory(state) {
            state.historys.length = 0;
        },
        toggleModal(state) { 
            state.modal = !state.modal;
        }
    }
});

export const { addToHistory, clearHistory, toggleModal } = searchHistory.actions;
export default searchHistory.reducer;
