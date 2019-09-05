import React, {Component} from 'react';
import Input from './input';

class LoginForm extends Component {
state = {
  account: { username: '', password: ''}
}



handleSubmit = e => {
    e.preventDefault();

    //call the server and redirect to a new page
    console.log('submit');
};

handleChange = e => {
  //login form
const account = {...this.state.account};
account[e.currentTarget.name] = e.currentTarget.value;
this.setState({account});
console.log(account);
};

  render() {
    const {account} = this.state;

    return (
    <div>
      <h1> Login</h1>
    <form onSubmit={this.handleSubmit}>
<Input name="username"
  value={account.username}
  label="Username"
  onChange={this.handleChange} />

<Input name="password"
    value={account.password}
    label="password"
    onChange={this.handleChange} />
<button className="btn btn-primary">Login</button>
    </form>
    </div>
  );
  }

}

export default LoginForm;
