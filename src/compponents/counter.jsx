import React from "react";

const Counter = ({id, value, name, onIncrement, onDecrement, onDelete}) => {
  // console.log(props);
  // делаем компонент полностью управляемым родителем counters.jsx:
  // Удаляем useState (а также { useState } из импорта):
  // + меняем везде value на props.value
  // + удаляем методы декремент и инкремент, и заменяем их вызовы на props.onIncrement и props.onDecrement
  // const [value, setValue] = useState(props.value);
  // const tags = ["tag1", "tag2", "tag3"];
  const formValue = () => {
    return value === 0 ? "Ноль" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  // const renderTags = () => {
  //   if (tags.length === 0) return "Тегов не найдено";
  //   return tags.map((tag) => <li key={tag}>{tag}</li>);
  // };

  // const handleIncrement = (productId) => {
  //   // props.value = props.value + 1   // вернет ошибку - props доступны только для чтения
  //   // если их нужно менять - то их нужно поместить в локальное состояние компонента
  //   // - зд. - в файле counters.jsx   const [count, setCount] = useState()
  //   setValue(props.value + 1);
  // };

  // const handleDecrement = (productId) => {
  //   if (props.value > 0) {
  //     setValue(props.value - 1);
  //   }
  // };

  return (
    <div>
      {/* {tags.length === 0 && "Теги не найдены"} */}
      {/* {renderTags()} */}
      {/* {props.children}  вместо этого лучше (+ в counters.jsx): */}
      <h4>{name}</h4>

      <span className={getBadgeClasses()}>{formValue()}</span>

      <button
        // onClick={() => handleIncrement({ id: 1 })}
        onClick={() => onIncrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>

      <button
        // onClick={() => handleDecrement({ id: 1 })}
        onClick={() => onDecrement(id)}
        className="btn btn-secondary btn-sm"
      >
        Decrement
      </button>

      {/* реализуем удаление элемента через компонент counters.jsx: */}
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
