import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    title: "this is a true title",
  });
  function reducer(state, action) {
    switch (action.type) {
      case "increament":
        return { ...state, counter: state.counter + 1 };
      case "decremeant":
        return { ...state, counter: state.counter - 1 };
      case "fakeTitle":
        return { ...state, title: "this is a fake title" };
    }
  }
  return (
    <div className="container p-3">
      <h1 className="m-0">{state.counter}</h1>
      <button
        className="bg-info text-white rounded"
        onClick={() => dispatch({ type: "increament" })}
      >
        increament+
      </button>
      <button
        className="bg-warning text-white rounded"
        onClick={() => dispatch({ type: "decremeant" })}
      >
        decremeant-
      </button>
      <h2>{state.title}</h2>
      <button
        className="bg-danger text-white rounded"
        onClick={() => dispatch({ type: "fakeTitle" })}
      >
        change title?
      </button>
    </div>
  );
};

export default UseReducer;
