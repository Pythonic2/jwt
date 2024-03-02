import React from 'react';

export default class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submitted: false, // Adicionando uma nova variável de estado para rastrear se o formulário foi enviado
      livros: [] // Adicionando um novo estado para armazenar os livros
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    // Parar a página de recarregar
    event.preventDefault();

    // Informações do usuário (nome de usuário e senha)
    const userData = {
      username: this.state.username,
      password: this.state.password
    };

    // Configurações para a solicitação (método POST, corpo da solicitação)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };

    // Fazendo a solicitação para obter o token de acesso
    fetch('http://127.0.0.1:8000/api/token/', requestOptions)
      .then(response => response.json())
      .then(tokenData => {
        console.log('Token:', tokenData.access);

        // Adicionando o token de acesso aos cabeçalhos da solicitação para /livros/
        const requestOptionsLivros = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenData.access}` // Adicionando o token aqui
          }
        };

        // Fazendo a solicitação GET para /livros/ com o token de acesso
        fetch('http://127.0.0.1:8000/livros/', requestOptionsLivros)
          .then(response => response.json())
          .then(livrosData => {
            console.log('Livros:', livrosData);
            // Salvando os livros no estado
            this.setState({ livros: livrosData });
          })
          .catch(error => console.error('Erro:', error));
      })
      .catch(error => console.error('Erro:', error));

    // Marcando o formulário como enviado
    this.setState({ submitted: true });
  }

  render() {
    // Se o formulário foi enviado, exibir a lista de livros
    if (this.state.submitted) {
      return (
        <div>
          <h2>Lista de Livros</h2>
          <ul>
            {this.state.livros.map(livro => (
              <li key={livro.id}>{livro.nome}</li>
            ))}
          </ul>
        </div>
      );
    }

    // Se o formulário ainda não foi enviado, exibir o formulário
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          Senha:
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
