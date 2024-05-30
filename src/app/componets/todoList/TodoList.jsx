"use client";

import { useState } from "react";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const addTaskHandler = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      console.log("no Data");
      return;
    }

    setMainTask([...mainTask, { title, desc }]);

    setTitle("");
    setDesc("");
    console.log("mainTask", mainTask);
  };

  const deleteHandler = (i) => {
    let deleteData = [...mainTask];
    deleteData.splice(i, 1);
    console.log("deleteData", deleteData);
    setMainTask(deleteData);
  };

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold bg-black text-white flex items-center justify-center h-20">
        Todo List
      </h1>
      <div className="mx-4">
        <form
          onSubmit={addTaskHandler}
          className="container m-auto mt-20 max-w-[500px] flex flex-col justify-center items-center"
        >
          <div className="">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Task here"
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
            <input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              placeholder="Enter Description here"
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-32 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>

        <div className="py-6 mt-3">
          {mainTask.map((item, i) => {
            return (
              <tr
                key={i}
                className="flex flex-col my-2 sm:flex sm:justify-between sm:mx-52 sm:my-2 sm:flex-row "
              >
                <h4 className="font-semibold">{item.title}</h4>
                <h5 className="text-sm mt-1">{item.desc}</h5>
                <button
                  onClick={() => deleteHandler(i)}
                  type="button"
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </div>
      </div>
    </div>
  );
}
