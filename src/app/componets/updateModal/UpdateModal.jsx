"use client";
import React, { useState } from "react";

export default function UpdateModal() {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const submitHandler = () => {};

  return (
    <>
      <button
        onClick={modalHandler}
        className="bg-blue-500 p-4 text-white rounded-lg"
      >
        Toggle modal
      </button>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto p-6">
            <button
              onClick={closeModalHandler}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  //   placeholder=""
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
