import React, { Component } from "react";
import Button from "./button";
import UserList from "./Userlist";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){

    this.setState(state => (
      {
        showUsers: !state.showUsers
      }
    ))
  }


  render() {
    return (
      <div>
        <h1>Barev React!!!</h1>
        <Button onClick={this.handleClick} buttonTitle="Users"/>
        { this.state.showUsers && <UserList></UserList>}
      </div>
    );
  }
}
