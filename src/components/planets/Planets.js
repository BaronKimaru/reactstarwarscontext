import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Planet from "./Planet";

class Planets extends Component {
  render() {
    return (
      <Consumer>
        {/* pass on the state (ie value was {this.state}) */}
        {(value) => {
          //console.log the value
          console.log(value);
          // destructure results from the {this.state} representation
          const { planet_list, heading } = value;
          //   return <Spinner />; // test out whether the spinner gif works
          if (planet_list === undefined || planet_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="display-4 text-center mb-3">{heading}</h3>
                <div className="row">
                  {/* // an expression to map through the results */}
                  {planet_list.map((item) => (
                    //render a Planet Component in the JSX Here
                    <Planet key={item.url} planet={item} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Planets;
