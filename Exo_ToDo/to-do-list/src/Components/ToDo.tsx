export class ToDoItem {
    private static _count = 0;
    private _id: number;
    private _isDone: boolean;

    constructor(private title: string, private description: string, private dueDate: Date) {
        this._id = ++ToDoItem._count;
        this._isDone = false;
    }
}