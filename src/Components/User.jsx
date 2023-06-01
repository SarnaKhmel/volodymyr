import { useState } from "react";

const User = ({ name, id, email, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleOnEdit = (event) => {
    event.preventDefault();
    onEdit(id, event.target.name.value, event.target.email.value);
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
    console.log("delete");
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEdit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            defaultValue={name}
          />
          <input
            type="email"
            placeholder="email"
            name="email"
            defaultValue={email}
          />
          <button onSubmit={handleOnEdit}>Save</button>
        </form>
      ) : (
        <div>
          <span> {name}</span> | <span> {email}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}> Delete </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
