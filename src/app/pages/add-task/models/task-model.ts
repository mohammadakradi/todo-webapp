export interface TaskModel {
    taskItem: TaskItemModel | null;
    dueDate: DueDateModel | null
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
