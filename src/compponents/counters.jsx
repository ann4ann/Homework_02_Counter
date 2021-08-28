import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, ...rest }) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map((counter) => (
        // <Counter key={counter.id} value={counter.value}>
        //   <h4>{counter.name}</h4>
        // </Counter>  вместо этого лучше (+ в counter.jsx):
        <Counter
          key={counter.id}
          // id={counter.id}   // дублируем, т.к. key - атрибут реакта, недоступен
          // value={counter.value}
          // name={counter.name}
          // вместо всех //свойств выше можно передать сам объект счетчика
          // counter={counter}
          // но тогда нужно будет в counter.jsx менять все обращения к свойствам. Поэтому можно:
          {...counter}
          {...rest}
          // реализуем метод удаления для кнопки delete в counter.jsx здесь:
          //   onDelete={props.onDelete}
          //   onIncrement={props.onIncrement}
          //   onDecrement={props.onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
