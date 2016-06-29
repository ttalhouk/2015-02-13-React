var React = require('react');

var fetchUsers = (cb) => {
  setTimeout(() =>{
    cb([{name: 'Ryan'}, {name: 'Marc'}, {name: 'Mark'}])
  }, 500);
};

var App = React.createClass({
  getInitialState () {
    return {
      users: [],
      loaded: false
    }
  },
  componentDidMount () {
    fetchUsers((users) => {
      this.setState({
        users,
        loaded: true

      });
    })
  },

deleteUsers (target) {
  var users = this.state.users;
  var withoutUser = users.filter(user => user.name !== target.name);
  this.setState({users: withoutUser});
},



  render () {
    if (!this.state.loaded)
      return <div>Loading</div>;
    var users = this.state.users.map((user) => {
      return <li onClick={this.deleteUsers.bind(this,user)}>{user.name}</li>;
    })
    return(
      <div>
        <h1>Hello</h1>
        <ul>
          {users}
        </ul>
      </div>
    );
  }
});

React.render(<App/>, document.body );
