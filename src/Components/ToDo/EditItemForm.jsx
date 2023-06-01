import React from "react";
import { useState } from "react";
import { Form } from "react-router-dom";

const colors = [
  {
    colorS: "red",
  },
  {
    colorS: "pink",
  },
  {
    colorS: "green",
  },
  {
    colorS: "blue",
  },
  {
    colorS: "yellow",
  },
];

const EditItemForm = ({ val, color, colorList, checked, id }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [newName, setNewName] = useState(val);
  const onChangeName = (e) => {};

  const onCancelClick = () => {};
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        defaultValue={val}
        style={{ backgroundColor: color }}
        onChange={onChangeName}
      />

      <div className="colorSelector">
        {colors.map((color, index) => {
          const checkedClass = color.colorS === color ? "checked" : "";
          return <input type="radio" key={index} data-color={color.colorS} />;
        })}
      </div>
      <input type="submit" value="Save" />
      <button type="button" onClick={onCancelClick}>
        Cancel
      </button>
    </form>
  );
};

export default EditItemForm;
