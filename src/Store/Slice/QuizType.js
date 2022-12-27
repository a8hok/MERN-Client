import { createSlice } from "@reduxjs/toolkit";

export const TypesofQuiz = createSlice({
    name: "QuizType",
    initialState: {
        TypeOfQuiz: ""
    },
    reducers: {
        typeSkill(state){
            state.TypeOfQuiz = "Skill"
        },
        typeAcademic(state){
            state.TypeOfQuiz = "Academic"
        }
    }
})

export const selectTypeAction = TypesofQuiz.actions;

const QuizType = TypesofQuiz.reducer;

export default QuizType;
