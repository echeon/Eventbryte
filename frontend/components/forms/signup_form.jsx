import React from 'react';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleChange(prop) {
    return e => {
      e.preventDefault();
      this.setState({ [prop]: e.currentTarget.value });
    };
  }

  handleGuestLogin(e) {
    e.preventDefault();
    const guest = {email: "guest@eventbryte.com", password: "password"};
    this.props.login(guest);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const { email, password } = this.state;
    const user = this.state;
    this.props.signup(user);
  }

  render() {
    let errors, errorNotification;

    if (this.props.errors.length) {
      errors = (
        <ul>
          { this.props.errors.map( (error, i) => <li key={i}>{error}</li> ) }
        </ul>
      );

      errorNotification = (
        <table className="notification-error-table">
          <tbody>
            <tr>
              <td className="error-icon">
                <i className="material-icons">error_outline</i>
              </td>
              <td className="error-content">{errors}</td>
            </tr>
          </tbody>
        </table>
      );
    }

    return (
      <form className='user-info-form' onSubmit={this.handleSubmit}>
        <h2>Sign up</h2>
        {errorNotification}
        <input type="text"
               placeholder="Email"
               onChange={this.handleChange("email")} />
        <input type="password"
               placeholder="Password"
               onChange={this.handleChange("password")} />
        <button>Sign up</button>
        <button onClick={this.handleGuestLogin}>Guest log in</button>
      </form>
    );
  }
}
