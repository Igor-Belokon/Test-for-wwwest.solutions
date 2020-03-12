import React from "react";
import { connect } from "react-redux";
import { correctLogin } from "../../store/action/data";
import "../style.css";

class Login extends React.Component {
  state = {
    login: "",
    password: "",
    authorized: false
  };
  onLogin = () => {
    if (this.state.login === "admin" && this.state.password === "12345") {
      this.setState({ authorized: true });
      this.props.correctLogin(this.state.authorized);
    } else {
      alert("The username or password you entered is incorrect");
    }
  };
  handleChange = event => {
    this.setState({ [event.target.name]: [event.target.value] });
  };
  render() {
    return (
      <div className="reg1">
        <div className="reg-form">
          <div className="reg2">
            <label>Login:</label>
            <label>Password:</label>
          </div>
          <div className="reg2">
            <input
              type="login"
              name="login"
              placeholder="Login"
              value={this.state.login}
              onChange={this.handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button onClick={this.onLogin}>logined</button>
        </div>
      </div>
    );
  }
}
export default connect(null, { correctLogin })(Login);
