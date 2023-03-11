import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if(localStorage.getItem('chat-app-user')){
        navigate('/')
    }
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { password, username } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Şifre boş bırakılamaz!", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Kullanıcı adı boş bırakılamaz", toastOptions);
      return false;
    } 
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              zoomAndPan="magnify"
              viewBox="0 0 375 374.999991"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <path
                className="rotate"
                fill="#70a33c"
                d="M 227.414062 325.253906 C 253.902344 322.402344 313.25 304.097656 328.03125 217.363281 C 332.457031 219.238281 337.183594 220.511719 342.210938 220.511719 C 360.519531 220.511719 375 205.65625 375 187.726562 C 375 169.417969 360.519531 154.5625 342.210938 154.5625 C 335.609375 154.5625 329.308594 156.4375 324.203125 159.890625 C 309.347656 134.003906 298.019531 124.851562 263.65625 102.492188 L 264.628906 103.464844 L 264.929688 103.464844 L 264.929688 103.765625 C 287.363281 124.625 301.546875 154.261719 301.546875 187.351562 C 301.546875 188.324219 301.546875 188.925781 301.546875 189.527344 C 304.398438 245.421875 277.609375 304.996094 227.414062 325.253906 Z M 227.414062 325.253906 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                className="rotate"
                fill="#773d8a"
                d="M 49.746094 227.414062 C 52.597656 253.902344 70.902344 312.949219 157.636719 328.03125 C 155.761719 332.15625 154.488281 337.183594 154.488281 342.210938 C 154.488281 360.21875 169.34375 375 187.648438 375 C 205.65625 375 220.4375 360.144531 220.4375 342.210938 C 220.4375 335.609375 218.5625 329.308594 215.109375 324.203125 C 241.296875 309.347656 250.148438 297.71875 272.507812 263.65625 L 271.535156 264.628906 L 271.535156 264.929688 C 254.203125 283.539062 230.492188 296.519531 204.007812 300.269531 L 187.574219 329.605469 L 171.59375 301.546875 C 120.121094 299.96875 68.425781 273.484375 49.746094 227.414062 Z M 49.746094 227.414062 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                className="rotate"
                fill="#e13990"
                d="M 147.585938 49.746094 C 121.097656 52.597656 62.050781 70.902344 46.96875 157.636719 C 42.84375 155.761719 37.816406 154.488281 32.789062 154.488281 C 14.78125 154.488281 0 169.34375 0 187.273438 C 0 205.582031 14.855469 220.4375 32.789062 220.4375 C 39.390625 220.4375 45.691406 218.5625 50.796875 215.109375 C 65.652344 240.996094 77.28125 250.148438 111.34375 272.507812 L 110.070312 271.234375 C 87.636719 250.449219 73.453125 220.8125 73.453125 187.351562 C 73.453125 186.75 73.453125 186.074219 73.453125 185.472656 C 70.601562 129.578125 97.390625 70.003906 147.585938 49.746094 Z M 147.585938 49.746094 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                className="rotate"
                fill="#f0831e"
                d="M 325.253906 147.585938 C 322.703125 121.097656 304.097656 61.75 217.363281 46.96875 C 219.238281 42.84375 220.511719 37.816406 220.511719 32.789062 C 220.511719 14.78125 205.65625 0 187.726562 0 C 169.417969 0 154.5625 14.855469 154.5625 32.789062 C 154.5625 39.390625 156.4375 45.691406 159.890625 50.796875 C 134.003906 65.652344 124.851562 77.28125 102.492188 111.34375 L 102.792969 111.34375 L 103.390625 110.367188 L 103.691406 110.070312 C 124.550781 87.636719 154.1875 73.453125 187.648438 73.453125 C 188.25 73.453125 188.925781 73.453125 189.527344 73.453125 C 245.421875 70.601562 304.996094 97.390625 325.253906 147.585938 Z M 325.253906 147.585938 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                fill="#6bc3fe"
                d="M 125.824219 169.042969 C 136.253906 169.042969 144.433594 177.222656 144.433594 187.648438 C 144.433594 197.777344 136.253906 205.957031 125.824219 205.957031 C 115.695312 205.957031 107.519531 197.777344 107.519531 187.648438 C 107.519531 177.222656 115.695312 169.042969 125.824219 169.042969 Z M 125.824219 169.042969 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                fill="#6bc3fe"
                d="M 187.648438 169.042969 C 197.777344 169.042969 205.957031 177.222656 205.957031 187.648438 C 205.957031 197.777344 197.777344 205.957031 187.648438 205.957031 C 177.222656 205.957031 169.042969 197.777344 169.042969 187.648438 C 169.042969 177.222656 177.222656 169.042969 187.648438 169.042969 Z M 187.648438 169.042969 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
              <path
                fill="#6bc3fe"
                d="M 249.175781 169.042969 C 259.304688 169.042969 267.480469 177.222656 267.480469 187.648438 C 267.480469 197.777344 259.304688 205.957031 249.175781 205.957031 C 239.046875 205.957031 230.566406 197.777344 230.566406 187.648438 C 230.566406 177.222656 239.121094 169.042969 249.175781 169.042969 Z M 249.175781 169.042969 "
                fill-opacity="1"
                fill-rule="nonzero"
              />
            </svg>
            <h1>ChatApp</h1>
          </div>
          <input
            type="text"
            placeholder="Kullanıcı Adı"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
          <input
            type="password"
            placeholder="Şifre"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Giriş Yap</button>
          <span>
            Hesabınız Yok mu ? <Link to="/register">Kayıt Ol</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    svg {
      height: 5rem;
      .rotate {
        animation: rotate 5s infinite;
        transform-box: view-box;
        transform-origin: center;
      }
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
  @keyframes rotate {
    60% {
      transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
  }
`;

export default Login;
