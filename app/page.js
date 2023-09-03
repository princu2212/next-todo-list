"use client";

import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [storetask, setstoretask] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    setstoretask([...storetask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteTask = (index) => {
    let copytask = [...storetask];
    copytask.splice(index, 1);
    setstoretask(copytask);
  };

  let render = <h2>No Task here...</h2>;

  if (storetask.length > 0) {
    render = storetask.map((task, index) => {
      return (
        <>
          <div key={index} className="flex justify-around py-5">
            <h3>{task.title}</h3>
            <p>{task.desc}</p>
            <button
              className="rounded bg-red-700 text-white px-4 py-2"
              onClick={() => {
                deleteTask(index);
              }}
            >
              Delete
            </button>
          </div>
        </>
      );
    });
  }

  return (
    <>
      <h1 className="text-center text-2xl bg-slate-950 text-white p-5 font-bold">
        My Todo List
      </h1>
      <div className="mt-5 flex justify-center">
        <form onSubmit={formSubmit}>
          <input
            type="text"
            className="border-slate-600 border-2 rounded mx-5 p-3 "
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-slate-600 border-2 rounded mx-5 p-3 "
            placeholder="Enter Description"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
          />
          <button className="rounded bg-slate-900 text-white px-4 py-2">
            Add Task
          </button>
        </form>
      </div>
      <div className="mx-20 items-center text-center my-5 py-3 bg-slate-800 text-white">
        {render}
      </div>
    </>
  );
}
