import { Component } from "react";
// import React, { useState } from "react";
import classNames from "classnames";
import { FaEdit } from "react-icons/fa";
// import { FaEye } from "react-icons/fa";
// import { FaEyeOff } from "react-icons/fa";
import styles from "./SignUpForm.module.sass";

const INITIAL_VALUES = { user: "", email: "", password: "" };

const LOGIN_FORM_REX_EXP = {
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,20}$/,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: INITIAL_VALUES.user,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
      isAgree: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { isAgree } = this.state;
    const value = e.target.checked;
    this.setState({
      isAgree: !isAgree,
    });
  }

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REX_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(INITIAL_VALUES);
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid, isAgree } =
      this.state;

    const userClassName = classNames(styles.input);

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    return (
      <div className={styles.formContainer}>
        <div className={styles.avatar}>
          <FaEdit className={styles.icon} />
        </div>
        <h1 className={styles.formHeader}>Create Your Account</h1>

        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>FULL NAME</span>
            <input
              className={userClassName}
              type="text"
              name="full-name"
              placeholder="John Doe"
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>EMAIL ADRESS</span>
            <input
              className={emailClassName}
              type="email"
              name="email"
              placeholder="your@mail"
              value={email}
              onChange={this.handleEmailChange}
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>PASSWORD</span>
            <input
              className={passwordClassName}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>

          <label>
            <input
              name="isAgree"
              type="checkbox"
              checked={isAgree}
              onChange={this.handleInputChange}
            />
            I Agree All Statements In Terms of Service
          </label>
          <button className={styles.submit} type="submit">
            Sign Up
          </button>
          <p>
            I'm already a member!
            <span className={styles.signIn}> Sign In</span>
          </p>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
