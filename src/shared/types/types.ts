//Типы применяемые в приложении
export interface Task {
  task_id: string;
  value: string;
  checked: boolean;
}

export interface PropsTask {
  task_id: string;
  value: string;
  checked: boolean;
  index: number;
  setActiveCard: (value: number | null) => void;
}
