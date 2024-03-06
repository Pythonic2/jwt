import React from "react";

export default class LoginComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', error: null };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }
  
  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const url = 'http://127.0.0.1:8000/api-token-auth/';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: this.state.username, password: this.state.password })
    };

    fetch(url, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao fazer login. Por favor, verifique suas credenciais.');
        }
        return response.json();
      })
      .then(data => localStorage.setItem('token', data.token))
      .catch(error => {
        this.setState({ error: error.message });
        console.error('Erro ao fazer login:', error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nome de Usuário:
            <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
          </label>
          <label>
            Senha:
            <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}
