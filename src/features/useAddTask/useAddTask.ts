import { KeyboardEvent } from "react";
import { useAppDispatch } from "../../shared/hooks/hooks";
import { Task } from "../../shared/types/types";
import { addTask } from "../../store/slice";

interface PropsUseAddTask {
  setIsError: (isError: boolean) => void;
  setValue: (value: string) => void;
}

//hook для добавления задач в store
export const useAddTask = ({ setIsError, setValue }: PropsUseAddTask) => {
  const dispatch = useAppDispatch();

  //Функция по добавлению задачи в store
  const handleClickAddTask = (value: string) => {
    //Получения текущего времени, для использования в качестве task_id
    const currentDate = new Date();
    const newTask: Task = { task_id: currentDate.toISOString(), checked: false, value: value };

    //Проверка, если поле ввода имени задачи не пустое, то добавить задачу в store, если пустое, то установить ошибку
    if (value.trim()) {
      dispatch(addTask(newTask));
      setValue("");
    } else {
      setIsError(true);
      setValue("");
    }
  };

  //Функция для добавления задачи по нажатию клавиши Enter
  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      document.getElementById("add_task")?.click();
    }
  };

  return {
    handleClickAddTask,
    handlePressEnter,
  };
};
