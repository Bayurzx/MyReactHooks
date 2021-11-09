import React from "react";
import useInput from "./useHooks/useInput";

function UserForm() {
  // we are using the useInput hook we defined instead
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();

    alert(`Hello ${firstName} ${lastName}`);

    resetFirstName()
    resetLastName()
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>FIrst Name</label>
          <input
            type="text"
            // value={firstName}
            // onChange={(e) => bindFirstName(e.target.value)}
            {...bindFirstName}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            // value={lastName}
            // onChange={(e) => bindLastName(e.target.value)}
            {...bindLastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
