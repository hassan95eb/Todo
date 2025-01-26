import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

export default function TaskItems() {
  const { taskItem, setTaskItem } = useContext(TaskContext);
  const handleChangeTask = (id) => {
    const index = taskItem.findIndex((t) => t.id === id);
    let newTaskItem = [...taskItem];
    newTaskItem[index].done = !newTaskItem[index].done;
    setTaskItem(newTaskItem);
  };
  const handleClickDelete = (id) => {
    setTaskItem(taskItem.filter((t) => t.id != id));
  };
  if (taskItem.length) {
    return (
      <ul className="flex flex-col h-[300px] overflow-y-auto">
        {taskItem.map((t) => (
          <li
            key={t.id}
            className={`flex justify-between items-center py-2 px-2 my-1 rounded-sm ${
              t.done ? "bg-green-700" : "bg-gray-800"
            }`}
          >
            <p className="text-amber-100 w-64">{t.title}</p>
            <div className="flex justify-end items-center">
              {t.done ? (
                <i
                  className="fa fa-times cursor-pointer text-red-700"
                  onClick={() => {
                    handleChangeTask(t.id);
                  }}
                ></i>
              ) : (
                <i
                  className="fa fa-check cursor-pointer text-blue-800 pl-2"
                  onClick={() => {
                    handleChangeTask(t.id);
                  }}
                ></i>
              )}
              <i
                className="fa fa-trash cursor-pointer  text-orange-400 pl-2"
                onClick={() => {
                  handleClickDelete(t.id);
                }}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <h3 className="font-semibold text-xl text-center py-2">No task added</h3>
    );
  }
}
