import React, { useState }  from "react";

export default function RegForm() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phoneno: "",
    password:"",
    confirmPassword:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((perE) => ({ ...perE, [name]: value }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(
      `Name: ${user.name}, Username: ${user.username}, Email: ${user.email},Phone No :${user.phoneno0} , Password : ${user.password} , Confirm Password :${user.confirmPassword}`
    );
    
     console.log(user);
    // // Send the form data to NestJS using Axios
    // axios.post("http://localhost:4100/student", user)
    //   .then((response) => {
    //     console.log("student add ");
    //   })
    //   .catch((error) => {
    //     console.log("ERROR",error);
    //   });

  };
  return (
    <div class="container">
      <div class="title">Registration</div>
      <form onSubmit={submitData}>
        <div class="user__details">
          <div class="input__box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="E.g: John Smith" name="name" required value={user.name}
            onChange={handleChange}/>
          </div>
          <div class="input__box">
            <span class="details">Username</span>
            <input type="text" placeholder="johnWC98" name="username" required value={user.username}
            onChange={handleChange}/>
          </div>
          <div class="input__box">
            <span class="details">Email</span>
            <input type="email" name="email" placeholder="johnsmith@hotmail.com" required value={user.email}
            onChange={handleChange}/>
          </div>
          <div class="input__box">
            <span class="details">Phone Number</span>
            <input
              type="tel"
              // {pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"}
              placeholder="012-345-6789"
              required
              name="phoneno"
              value={user.phoneno}
          onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Password</span>
            <input type="password" placeholder="********" name="password" required value={user.password}
            onChange={handleChange}/>
          </div>
          <div class="input__box">
            <span class="details">Confirm Password</span>
            <input type="password" placeholder="********" name="confirmPassword" value={user.confirmPassword}
            onChange={handleChange} />
          </div>
        </div>
        {/*<div class="gender__details">
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <span class="gender__title">Gender</span>
          <div class="category">
            <label for="dot-1">
              <span class="dot one"></span>
              <span>Male</span>
            </label>
            <label for="dot-2">
              <span class="dot two"></span>
              <span>Female</span>
            </label>
            <label for="dot-3">
              <span class="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
  </div>*/}
        <div class="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
}
