import React, { useState } from "react";
import axios from "axios";
const Form = () => {
  const [user, setUser] = useState({
    name: "",
    class: "",
    gender: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((perE) => ({ ...perE, [name]: value }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(
      `Name: ${user.name}, class: ${user.class}, gender: ${user.gender}`
    );
    
     console.log(user);
    // Send the form data to NestJS using Axios
    axios.post("http://localhost:4100/student", user)
      .then((response) => {
        console.log("student add ");
      })
      .catch((error) => {
        console.log("ERROR",error);
      });

  };

  return (
    <form onSubmit={submitData}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Class:</label>
        <input
          type="text"
          name="class"
          value={user.class}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Gender:</label>
        <select name="gender" value={user.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label>Marks:</label>
        <input
          type="number"
          name="marks"
          value={user.marks}
          onChange={handleChange}
        />
      </div>
      
      <button type="submit">Add User</button>
    </form>
  );
};

export default Form;
