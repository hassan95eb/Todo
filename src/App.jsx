const App = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-4/5 md:w-2/5 bg-gray-900 text-amber-100 border-2 border-fuchsia-700 rounded-md px-3 py-2 shadow-md shadow-fuchsia-900">
        <h1 className="text-2xl font-semibold text-fuchsia-50 text-center border-b border-b-fuchsia-900 py-1">
          Todo List
        </h1>
        <div className="w-full">
          <form>
            <div className="flex justify-around items-center my-2 border-b border-b-fuchsia-700 pb-2">
              <input
                type="text"
                className="bg-gray-400 text-amber-100 border border-fuchsia-600 rounded-md focus-visible:bg-gray-500  focus-visible:outline-fuchsia-700 focus-visible:border-2 focus-within:border-fuchsia-700 w-80"
              />
              <button
                type="submit"
                className="w-32 bg-emerald-600 text-xl font-semibold rounded-md "
              >
                Add
              </button>
            </div>
          </form>
          <ul className="flex flex-col">
            <li className="bg-gray-800 flex justify-between items-center py-1 px-2 rounded-sm ">
              <p className="text-amber-100 w-64">Task1</p>
              <div className="flex justify-end items-center">
                <i className="fa fa-times text-red-700"></i>
                <i className="fa fa-check text-blue-800 pl-2"></i>
                <i className="fa fa-trash  text-orange-400 pl-2"></i>
              </div>
            </li>
            <li className=" flex justify-between items-center py-1 px-2 rounded-sm my-1 bg-green-600">
              <p className="text-amber-100 w-64">Task1</p>
              <div className="flex justify-end items-center">
                <i className="fa fa-times text-red-700"></i>
                <i className="fa fa-check text-blue-800 pl-2"></i>
                <i className="fa fa-trash  text-orange-400 pl-2"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
