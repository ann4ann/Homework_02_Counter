import React, { useState } from "react";
import Counters from "./compponents/counters";
import NavBar from "./compponents/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  // !!!!!!!!!!!! первоначальные значения хранятся в useState
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    // console.log("handle delete", counterId);
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    // console.log("handle increment", counterId);
    const newCounters = counters.map((c) => {
      //   console.log("hi!");
      if (c.id === counterId) {
        c.value++;
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    // console.log("handle decrement", counterId);
    const newCounters = counters.map((c) => {
      //   console.log("hi!");
      if (c.id === counterId && c.value > 0) {
        c.value--;
      }
      return c;
    });
    setCounters(newCounters);
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onReset={handleReset}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
