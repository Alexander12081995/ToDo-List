//Отображение всех задач
import React, { useState } from "react";
import { Task } from "../../entities/Task/Task";
import { filters } from "../../shared/data/filters";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/hooks";
import css from "./tasksList.module.css";
import { Input } from "../../shared/Input/Input";
import { DropArea } from "../../entities/DropArea/DropArea";
import { setTasks } from "../../store/slice";

export const TasksList = () => {
  const dispatch = useAppDispatch();
  //Получение со store всех задач
  const tasks = useAppSelector((s) => s.todos.tasks);

  //Состояние фильтра
  const [filter, setFilter] = useState("all");
  //Состояние поиска
  const [search, setSearch] = useState("");
  //Перетаскиваемая задача
  const [activeCard, setActiveCard] = useState<number | null>(null);

  //Функция для перетаскивания задач
  const onDrop = (positions: number) => {
    if (activeCard === undefined || activeCard === null) return;

    const taskToMove = tasks[activeCard];
    const updateTasks = tasks.filter((_, index) => index !== activeCard);

    updateTasks.splice(positions, 0, taskToMove);

    dispatch(setTasks(updateTasks));
  };

  return (
    <>
      {/*Поле для поиска задач*/}
      <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="поиск..." className={css.search} />
      {/*Если задачи есть то отобразить фильтра, если нет, показать сообщение что задачи отсутствуют*/}
      {tasks.length > 0 ? (
        <ul className={css.listFilters}>
          {filters.map((i) => (
            <li
              key={i.value}
              className={`${css.filter} ${filter === i.value && css.activeFilter}`}
              onClick={() => setFilter(i.value)}
            >
              {i.text}
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.notFound}>Вы еще не добавили ни одной задачи</p>
      )}
      {/*Поле для перетаскивания задач*/}
      <DropArea onDrop={() => onDrop(0)} />
      {/*Список задач*/}
      <ul className={css.wrapperList}>
        {tasks
          .filter((i) => {
            if (filter === "completed") return i.checked;
            if (filter === "incomplete") return !i.checked;
            return true;
          })
          .filter((i) => i.value.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(({ checked, task_id, value }, index) => (
            <React.Fragment key={task_id}>
              <Task checked={checked} task_id={task_id} value={value} setActiveCard={setActiveCard} index={index} />
              {/*Поле для перетаскивания задач*/}
              <DropArea onDrop={() => onDrop(index)} />
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};
