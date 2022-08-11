import React from "react";
import "./NewContentForm.css";

export const LoginForm = (props) => {
  // username = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const username=username.current.value;
    console.log("submitted");
  };
  return (
    <div className="loginform">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div ClassName="form-group">
          <label htmlFor="username">Username</label>
          <input
            autoFocus
            // ref={username}
            id="username"
            type="text"
            className="form-control"
          />
        </div>
        <div ClassName="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control"></input>
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

// export default LoginForm
