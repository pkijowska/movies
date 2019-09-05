import React, {Component} from 'react';
import Input from './input';

class LoginForm extends Component {
state = {
  account: { username: '', password: ''},
  errors: {
  }
}

validate = () => {
  const errors = {};

  const { account } = this.state;
  if (account.username.trim() === '')
  errors.username = "Username is required";
  if (account.password.trim() === '')
  errors.password = 'Password is required';

  return Object.keys(errors).length === 0 ? null : errors;
}


handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
      console.log(errors);
    this.setState({errors: errors || {} });
    if (errors) return;

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
    const {account, errors} = this.state;

    return (
    <div>
      <h1> Login</h1>
    <form onSubmit={this.handleSubmit}>
<Input name="username"
  value={account.username}
  label="Username"
  onChange={this.handleChange}
  error={errors.username}
  />

<Input name="password"
    value={account.password}
    label="password"
    onChange={this.handleChange}
    error={errors.password}

    />
<button className="btn btn-primary">Login</button>
    </form>
    </div>
  );
  }

}

export default LoginForm;
