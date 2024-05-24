import { useAppDispatch } from "../../shared/hooks/hooks";
import { changeTask, deleteTask } from "../../store/slice";

//hook для работы с задачами(удаление, изменение)
export const useChangeTasks = () => {
  const dispatch = useAppDispatch();

  //Удаление задачи
  const handleClickDeleteTask = (task_id: string) => {
    dispatch(deleteTask(task_id));
  };

  //Изменение поля checked
  const handleChangeTask = (task_id: string) => {
    dispatch(changeTask(task_id));
  };

  return { handleClickDeleteTask, handleChangeTask };
};
