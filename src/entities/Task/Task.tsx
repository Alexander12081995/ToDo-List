import { FC } from "react";
import css from "./task.module.css";
import { Checkbox } from "../../shared/Checkbox/Checkbox";
import { Button } from "../../shared/Button/Button";
import { PropsTask } from "../../shared/types/types";
import { useChangeTasks } from "../../features/useChangeTasks/useChangeTasks";

//Компонент одной задачи
export const Task: FC<PropsTask> = ({ checked, task_id, value, setActiveCard, index }) => {
  const { handleClickDeleteTask, handleChangeTask } = useChangeTasks();

  return (
    <div
      className={`${css.wrapper} ${checked && css.wrapperChecked}`}
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <Checkbox checked={checked} onChange={() => handleChangeTask(task_id)} />
      <p className={css.taskText}>{value}</p>
      <p className={checked ? css.checked : css.notChecked}>{checked ? "выполнена" : "в плане"}</p>
      <Button onClick={() => handleClickDeleteTask(task_id)} className={css.btn}>
        Удалить
      </Button>
    </div>
  );
};
