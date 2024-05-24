import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PropsTask } from "../shared/types/types";

interface State {
  tasks: PropsTask[];
}

const initialState: State = {
  //Массив всех задач
  tasks: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTasks: (state, actions: PayloadAction<PropsTask[]>) => {
      state.tasks = actions.payload;
    },
    //Добавление задачи
    addTask: (state, actions: PayloadAction<PropsTask>) => {
      state.tasks.push(actions.payload);
    },

    //Удаление задачи
    deleteTask: (state, actions: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.task_id !== actions.payload);
    },

    //Изменение статуса задачи(выполнена/не выполнена)
    changeTask: (state, actions: PayloadAction<string>) => {
      const task = state.tasks.find((item) => item.task_id === actions.payload);
      if (task) {
        task.checked = !task.checked;
      }
    },
  },
});

export const { setTasks, addTask, deleteTask, changeTask } = todoSlice.actions;
export default todoSlice.reducer;
