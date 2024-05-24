//Типы применяемые на проекте

export interface PropsTask {
  task_id: string;
  value: string;
  checked: boolean;
  index: number;
  setActiveCard: (value: number | null) => void;
}
