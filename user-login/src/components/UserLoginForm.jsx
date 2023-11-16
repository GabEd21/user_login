// UserLoginForm.jsx
import React from 'react';
import TextBoxInput from './TextBoxInput';
import Button from './Button';

class UserLoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    loginSuccess: false,
    alertColor: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      loginSuccess: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const database = [
      {
        username: 'user1',
        password: 'pass1',
      },
      {
        username: 'user2',
        password: 'pass2',
      },
    ];

    const match = database.find((entry) => entry.username === username && entry.password === password);

    if (match) {
      this.setState({ alertColor: 'green', loginSuccess: true });
    } else {
      this.setState({ alertColor: 'red' });
    }
  };

  render() {
    const darkTheme = {
      backgroundColor: '#333',
      color: '#fff',
    };

    const buttonStyle = {
      ...darkTheme,
      backgroundColor: '#4CAF50',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };

    const formContainer = {
      ...darkTheme,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };

    const alertContainer = {
      ...darkTheme,
      padding: '10px',
      textAlign: 'center',
      width: '200px',
      borderRadius: '4px',
      margin: '10px auto',
    };

    return (
      <div style={formContainer}>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
          {this.state.alertColor === 'red' && (
            <div style={{ ...alertContainer, backgroundColor: this.state.alertColor }}>
              Login failed!
            </div>
          )}
          {this.state.loginSuccess && (
            <div style={{ ...alertContainer, backgroundColor: 'green' }}>Login successful!</div>
          )}
          <TextBoxInput
            label="Username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder = 'Username'
            required
          />
          <TextBoxInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder = 'Password'
            required
          />
          <div>
            <Button style={buttonStyle} type="submit" disabled = {false}>
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserLoginForm;
