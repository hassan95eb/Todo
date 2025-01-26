import { useContext, useState } from "react";
import { TaskContext } from "../context/taskContext";

const Topform = () => {
  const { taskItem, setTaskItem } = useContext(TaskContext);
  const [task, setTask] = useState("");
  function handleSetTask(event) {
    setTask(event.target.value);
  }
  const handleSaveTask = (e) => {
    e.preventDefault();
    const newTaskItem = [
      ...taskItem,
      {
        id: taskItem.length + 1,
        title: task,
        done: false,
      },
    ];
    setTaskItem(newTaskItem);
    setTask("");
  };
  return (
    <form onSubmit={handleSaveTask}>
      <div className="flex justify-around items-center my-2 border-b border-b-fuchsia-700 pb-2">
        <input
          type="text"
          className="bg-gray-400 text-amber-100 border border-fuchsia-600 rounded-md focus-visible:bg-gray-500  focus-visible:outline-fuchsia-700 focus-visible:border-2 focus-within:border-fuchsia-700 w-80"
          value={task}
          onChange={handleSetTask}
        />
        <button
          type="submit"
          className="w-32 bg-emerald-600 text-xl font-semibold rounded-md "
        >
          Add
        </button>
      </div>
    </form>
  );
};
export default Topform;
