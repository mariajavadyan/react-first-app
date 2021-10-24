import React, { Component } from "react";
import Button from "./button";
import UserList from "./Userlist";
import ItemsList from "./ItemsList";
import CategoriesList from "./CategoriesList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
      showItems: false,
      showCategories: false,
    };

    this.handleUsersClick = this.handleUsersClick.bind(this);
    this.handleItemsClick = this.handleItemsClick.bind(this);
    this.handleCategoriesClick = this.handleCategoriesClick.bind(this);
  }

  handleUsersClick() {
    this.setState((state) => ({
      showUsers: !state.showUsers,
    }));
  }

  handleItemsClick() {
    this.setState((state) => ({
      showItems: !state.showItems,
    }));
  }

  handleCategoriesClick() {
    this.setState((state) => ({
      showCategories: !state.showCategories,
    }));
  }

  render() {
    return (
      <div>
        <h1>Hello React!!!</h1>
        <Button onClick={this.handleUsersClick} buttonTitle="Users" />
        {this.state.showUsers && <UserList></UserList>}

        <br />

        <Button onClick={this.handleItemsClick} buttonTitle="Items" />
        {this.state.showItems && <ItemsList></ItemsList>}

        <br />

        <Button onClick={this.handleCategoriesClick} buttonTitle="Categories" />
        {this.state.showCategories && <CategoriesList></CategoriesList>}
      </div>
    );
  }
}
