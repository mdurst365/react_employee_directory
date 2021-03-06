import React from "react";
import "./styles.css";
import API from "../utils/API";
import Table from "./Table.js";

class UserContainer extends React.Component {
  state = {
    users: [],
    search: "",
    sortDirection: "",
    col: ""
  };

  componentDidMount() {
    API.usersList()
      .then(res => {
       /* const userArray = res.data.results.map(user => {
          return {
            first: user.name.first,
            last: user.name.last,
            email: user.email,
            image: user.picture.medium
          };
        });*/
        console.log(res)
        this.setState({ users: res.data.results });
      })
      .catch(err => console.log(err));
  }
  

  handleSearchChange = e => {
    this.setState({ search: e.target.value });
  };

  filteredUsers() {
    const search = this.state.search.toLowerCase();
    return this.state.users.filter(user => {
      return (
        user.first.toLowerCase().includes(search) ||
        user.last.toLowerCase().includes(search)
      );
    });
  }

  renderUsers = () => {
    return this.filteredUsers()
      .sort(this.sortUsers)
      .map((user, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={user.image} alt="user"></img>
            </td>
            <td>{user.first}</td>
            <td>{user.last}</td>
            <td>{user.email}</td>
          </tr>
        );
      });
  };

  getHeaderClassName = col => {
    return this.state.col === col
      ? `clickable ${this.state.sortDirection}`
      : `clickable`;
  };


  handleSortDirectionChange = col => {
    this.state.col === col && this.state.sortDirection === "ascending"
      ? this.setState({ sortDirection: "descending", col: col })
      : this.setState({ sortDirection: "ascending", col: col });
  };

  sortUsers = (a, b) => {
    if (a[this.state.col] < b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? -1 : 1;
    } else if (a[this.state.col] > b[this.state.col]) {
      return this.state.sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  };

  //render the user container including search field
  render() {
    return (
      <>
        <div className="input-group justify-content-center">
          <div className="input-group-prepend"></div>
          <input
            onChange={this.handleSearchChange}
            type="search"
            className="form-control m-3"
            placeholder="Search"
            aria-label="SearchBox"
            aria-describedby="basic-addon1"
          />
        </div>
        <Table
        users={this.state.users} 
        getHeaderClassName={this.getHeaderClassName}
  
        />
      </>
    );
  }
}

export default UserContainer;