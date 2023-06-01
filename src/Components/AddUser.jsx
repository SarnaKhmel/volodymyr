import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAdd(event.target.name.value, event.target.email.value);
    event.target.name.value = "";
    event.target.email.value = "";
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add user</h3>
      <input type="text" placeholder="name" name="name" />
      <input type="email" placeholder="email" name="email" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};

export default AddUser;
