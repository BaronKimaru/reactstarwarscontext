import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    // planet_list: [
    //   {
    //     name: "Naboo",
    //   },
    //   {
    //     name: "Tatooine",
    //   },
    // ],
    planet_list: [], // for api
    heading: "All Planets",
  };

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/planets")
      .then((res) => {
        console.log(res.data);
        this.setState({ planet_list: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
