import { useState } from "react";
import TaskItems from "./components/TaskItems";
import Topform from "./components/TopForm";
import { TaskContext } from "./context/taskContext";

const App = () => {
  const [taskItem, setTaskItem] = useState([
    // { id: 1, title: "job 1", done: false },
    // { id: 2, title: "job 2", done: true },
    // { id: 3, title: "job 3", done: false },
  ]);
  // console.log(taskItem);
  return (
    <TaskContext.Provider value={{ taskItem, setTaskItem }}>
      <div className="w-full h-screen bg-black flex justify-center items-center transition delay-150 duration-300 ease-in-out">
        <div className="w-4/5 md:w-2/5 bg-gray-900 text-amber-100 border-2 border-fuchsia-700 rounded-md px-3 py-2 shadow-md shadow-fuchsia-900">
          <h1 className="text-2xl font-semibold text-fuchsia-50 text-center border-b border-b-fuchsia-900 py-1">
            Todo List
          </h1>
          <div className="w-full">
            <Topform />
            <TaskItems />
          </div>
        </div>
      </div>
    </TaskContext.Provider>
  );
};
export default App;
