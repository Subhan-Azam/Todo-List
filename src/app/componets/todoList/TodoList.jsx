"use client";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

export default function TodoList() {
  const [title, setTitle] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null); 

  const addOrUpdateTask = (e) => {
    e.preventDefault();
    if (!title) {
      console.log("no Data");
      return;
    }

    if (editIndex !== null) {
      const updatedTasks = [...mainTask];
      updatedTasks[editIndex] = { title };
      setMainTask(updatedTasks);
      setEditIndex(null);
    } else {
      setMainTask([...mainTask, { title }]);
    }

    setTitle("");
  };

  const deleteHandler = (i) => {
    let deleteData = [...mainTask];
    deleteData.splice(i, 1);
    console.log("deleteData", deleteData);
    setMainTask(deleteData);
  };

  const editHandler = (i) => {
    setTitle(mainTask[i].title);
    setEditIndex(i);
  };

  return (
    <div>
      <h1 className="font-serif text-4xl font-bold bg-black text-white flex items-center justify-center h-20">
        Todo List
      </h1>
      <div className="mx-4">
        <form
          onSubmit={addOrUpdateTask}
          className="container m-auto mt-20 max-w-[500px] flex justify-center items-center gap-2"
        >
          <div className="container max-w-[500px]">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter Task here"
              className="w-full bg-gray-600 text-white mb-5 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button type="submit" className="mb-5">
            {editIndex !== null ? (
              <FaRegEdit className="text-gray-800 text-lg hover:text-blue-500" />
            ) : (
              <IoIosAddCircle className="text-gray-800 text-5xl hover:text-blue-600" />
            )}
          </button>
        </form>

        <div className="container m-auto mt-8 max-w-[500px] flex flex-col justify-center items-center gap-3">
          {mainTask.map((item, i) => {
            return (
              <div
                key={i}
                className="container max-w-[500px] px-4 py-2 bg-gray-700 rounded-lg flex justify-between items-center"
              >
                <h4 className="font-medium text-gray-300">{item.title}</h4>
                <div className="flex gap-3">
                  <button onClick={() => deleteHandler(i)} type="button">
                    <MdDelete className="text-white text-lg hover:text-red-600" />
                  </button>
                  <button
                    onClick={() => editHandler(i)}
                    type="button"
                  >
                    <FaRegEdit className="text-white text-lg hover:text-green-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
