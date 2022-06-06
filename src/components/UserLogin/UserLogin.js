import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../../store/slices/user.slice";
import { useDispatch } from "react-redux";

const UserLogin = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");

  const navigate = useNavigate();
  const getName = () => {
    console.log(userName);
    navigate("/pokedex");
    dispatch(changeUser(userName));
  };
  return (
    <div>
      <h1>User Login </h1>

      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={getName}>Enviar</button>
    </div>
  );
};

export default UserLogin;
