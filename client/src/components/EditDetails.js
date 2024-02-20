import React, { useState, useEffect } from "react";
import axios from "axios";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function EditDetails() {
  const { _id } = useParams();

  const [usersdata, setUsersData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const getData = await axios.get(`http://localhost:4100/student/${_id}`);
    setUsersData(getData.data.existingStudent);
  };
  const [user, setUser] = useState({
    name: usersdata.name,
    username: usersdata.username,
    email: usersdata.email,
    phoneno: usersdata.phoneno,
    password: usersdata.password,
    confirmPassword: usersdata.confirmPassword,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((perE) => ({ ...perE, [name]: value }));
  };

  const submitData = async (e) => {
    e.preventDefault();

    const postApi = await axios.put(
      `http://localhost:4100/student/${_id}`,
      user
    );
    alert(postApi.data.message)
  };



  return usersdata.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div class="container">
      <div class="title">Update Details</div>
      <form onSubmit={submitData}>
        <div class="user__details">
          <div class="input__box">
            <span class="details">Full Name</span>
            <input
              type="text"
              placeholder="E.g: John Smith"
              name="name"
              required
              defaultValue={usersdata.name}
              value={user.name}
              onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Username</span>
            <input
              type="text"
              placeholder="johnWC98"
              name="username"
              required
              defaultValue={usersdata.username}
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Email</span>
            <input
              type="email"
              name="email"
              placeholder="johnsmith@hotmail.com"
              required
              defaultValue={usersdata.email}
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Phone Number</span>
            <input
              type="tel"
              // {pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"}
              placeholder="012-345-6789"
              required
              name="phoneno"
              defaultValue={usersdata.phoneno}
              value={user.phoneno}
              onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Password</span>
            <input
              type="password"
              placeholder="********"
              name="password"
              required
              defaultValue={usersdata.password}
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div class="input__box">
            <span class="details">Confirm Password</span>
            <input
              type="password"
              placeholder="********"
              name="confirmPassword"
              defaultValue={usersdata.confirmPassword}
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="button">
          <input type="submit" value="Update" />
        </div>
        <Link to="/getUser"><div class="button">
          <input type="button" value="Back" />
        </div></Link>
      </form>
    </div>
  );
}
