import React, { useEffect, useState } from "react";
import axios from "axios";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

export default function GetRegisterUser() {
  const [usersdata, setUsersData] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);
  const fetchApi = async () => {
    const getData = await axios.get("http://localhost:4100/student");
    setUsersData(getData.data.studentData);
    
  };

  return usersdata.length === 0 ? (
    <ShimmerUI />
  ) : (
    // <div>{console.log(usersdata)}</div>
    <div className="container user-container">
      {usersdata.map((user) => (
        <Link to={"/edit/" + user._id} key={user._id} className="link">
          <div class="UserData">{user.name}</div>
        </Link>
      ))}
    </div>
  );
}
