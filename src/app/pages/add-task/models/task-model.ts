export interface TaskModel {
    taskItem: TaskItemModel | null;
    dueDate: DueDateModel | null;
    categories: number[] | null;
}

export interface TaskItemModel {
    taskName: string | null;
    taskDescription: string | null;
}

export interface DueDateModel {
    startTime: string
    endTime: string
    selectedDate: Date | null
}
