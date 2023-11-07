import React from 'react';

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
      loginSuccess: false, // Reset login success status when input changes
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const database = [
      {
        username: "user1",
        password: "pass1"
      },
      {
        username: "user2",
        password: "pass2"
      }
    ];

    const match = database.find(entry => entry.username === username && entry.password === password);

    if (match) {
      this.setState({ alertColor: 'green', loginSuccess: true });
    } else {
      this.setState({ alertColor: 'red' });
    }
  };

  render() {
    const inputStyle = {
      marginBottom: '10px',
      width: '200px',
      padding: '5px',
    };

    const buttonStyle = {
      backgroundColor: '#4CAF50',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    };

    const formContainer = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    };

    const alertContainer = {
      padding: '10px',
      color: 'white',
      textAlign: 'center',
      width: '200px',
      borderRadius: '4px',
      margin: '10px auto',
    };

    return (
      <div style={formContainer}>
        <form style={{ textAlign: 'center' }} onSubmit={this.handleSubmit}>
        <div style={{ ...alertContainer, backgroundColor: this.state.alertColor }}>
          {this.state.loginSuccess ? 'Login successful!' : 'Login failed!'}
        </div>
          <div style={inputStyle}>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div style={inputStyle}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <button style={buttonStyle} type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UserLoginForm;
