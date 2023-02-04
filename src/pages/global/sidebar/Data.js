import { ApiPath } from "../../../API/ApiPath";
import React, { useState, Component } from "react";
// import FetchCategories from "./data";
// import  ApiPath  from "../../API/ApiPath";

class ClientDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
      DataisLoaded: false,
      va: window.location.pathname.split("/"),
    };
  }

  componentDidMount() {
    fetch(
      ApiPath.API_URL +
        "ClientDetail/ClientDetails?partnerId=" +
        this.state.va[2]
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          clients: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const { DataisLoaded, clients } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        {clients.map((login) => (
          <ol key={login.pro_id}>
            First Name: {login.password + login.password}
          </ol>
        ))}
      </div>
    );
  }
}

export default ClientDetails;
