import React from "react";

export const AddMemory = () => {
  return (
    <>
      <div
        className="flex justify-center items-center  bg-gradient-to-br from-blue-100 to-purple-200"
        style={{ height: "calc(100vh - 64px)" }}
      >
        <div className="bg-white shadow-2xl border border-gray-200 rounded-3xl p-8 w-full max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Add a Memory
          </h2>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter a title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              placeholder="Write something memorable..."
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
            />
          </div>

          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition duration-200">
              Save Memory
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
