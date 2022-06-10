import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeUser } from "../../store/slices/user.slice";
import { useDispatch } from "react-redux";
import "./UserLogin.css";
import loginPokemon from "../../imagens/loginPokemon.jpeg";

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
    <div className="login-body">
      <div className="logo-container">
        <img src={loginPokemon} alt="" />
      </div>
      <div className="login-container">
        <h1>Login </h1>

        <form method="post">
          <div className="text-field">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <span></span>
            <label> Username</label>
          </div>
        </form>

        <button onClick={getName}>Enviar</button>
      </div>
    </div>
  );
};

export default UserLogin;
