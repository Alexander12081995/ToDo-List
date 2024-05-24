import { useEffect, useState } from "react";
import { Input } from "../../shared/Input/Input";
import css from "./header.module.css";
import { Button } from "../../shared/Button/Button";
import { useAddTask } from "../../features/useAddTask/useAddTask";
import { useAppSelector } from "../../shared/hooks/hooks";

export const Header = () => {
  //Получение со store всех задач и определение количества выполненных и не выполненных
  const tasks = useAppSelector((s) => s.todos.tasks);
  const countCompleted = tasks.filter((i) => i.checked === true).length;
  const countNotCompleted = tasks.filter((i) => i.checked === false).length;

  //Значение поля ввода наименования задачи
  const [value, setValue] = useState("");
  //Ошибка ввода
  const [isError, setIsError] = useState(false);

  //Функция по добавлению задачи в store
  const { handleClickAddTask, handlePressEnter } = useAddTask({ setIsError, setValue });

  //Если возникает ошибка то показать пользователю и убрать ошибку по истечению 3 секунд
  useEffect(() => {
    if (isError) {
      const timer = setTimeout(() => {
        setIsError(false);
        clearInterval(timer);
      }, 3000);
    }
  }, [isError]);

  return (
    <header className={css.header}>
      <h1 className={css.title}>Приложение по управлению задачами</h1>
      <div className={css.blockTasks}>
        <div className={css.addTask}>
          <p>Введите новую задачу что бы ее добавить</p>
          <div className={css.blockInput}>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handlePressEnter}
              placeholder="Новая задача"
              isError={isError}
            />
            <Button id="add_task" onClick={() => handleClickAddTask(value)}>
              Добавить
            </Button>
          </div>
        </div>
        <div className={css.countTasks}>
          <p>Выполнено: {countCompleted}</p>
          <p>Не выполнено: {countNotCompleted}</p>
        </div>
      </div>
    </header>
  );
};
