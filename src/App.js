import { useState } from "react";
import "./App.css";

function App() {
  const [errStatusName, setErrStatusName] = useState(false);
  const [errStatusEmail, setErrStatusEmail] = useState(false);
  const [errMsgName, setErrMsgName] = useState("");
  const [errMsgEmail, setErrMsgEmail] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setErrMsgName("*Required");
      setErrStatusName(true);
    } else {
      setErrMsgName("");
      setErrStatusName(false);
    }
    if (email === "") {
      setErrMsgEmail("*Required");
      setErrStatusEmail(true);
    } else {
      setErrMsgEmail("");
      setErrStatusEmail(false);
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    if (e.target.value === "") {
      setErrMsgName("*Required");
      setErrStatusName(true);
    } else {
      setErrMsgName("");
      setErrStatusName(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setErrMsgEmail("*Required");
      setErrStatusEmail(true);
    } else {
      setErrMsgEmail("");
      setErrStatusEmail(false);
    }
  };

  return (
    <div className="bg-container">
      <div className="col-12 container1"></div>
      <div className="form-container p-5">
        <form id="subscribeForm" onSubmit={onSubmit}>
          <label className="label" htmlFor="name">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            onChange={onChangeName}
            value={name}
          />
          <br />
          <p className="errorMsg" id="nameErrMsg">
            {errStatusName && errMsgName}
          </p>
          <br />
          <label className="label" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="email"
            onChange={onChangeEmail}
            value={email}
          />
          <br />
          <p className="errorMsg" id="emailErrMsg">
            {errStatusEmail && errMsgEmail}
          </p>
          <br />
          <div className="d-flex flex-row justify-content-center">
            <button typr="button" className="btn btn-primary button">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
