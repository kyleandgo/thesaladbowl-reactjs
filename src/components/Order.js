import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import ChooseBowl from "./ChooseBowl";
import ChooseIngredients from "./ChooseIngredients";
import Confirm from "./Confirm";
import Success from "./Success";

export class Order extends Component {
  // state as an object with fields to input
  state = {
    step: 1,
    chooseSize: "",
    chooseGreens: "",
    chooseProtein: "",
    chooseSauce: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    blockNumber: "",
    streetName: "",
    unitNumber: "",
    postalCode: "",
  };

  // Proceed to next step using destructuring through arrow functions
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1, // Changes implemented in the state
    });
  };

  // Handle fields change whenever input edited with arrow and event parameters
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    // Pull the step and fields out of the state by destructuring
    const { step } = this.state;
    const {
      chooseSize,
      chooseGreens,
      chooseProtein,
      chooseSauce,
      firstName,
      lastName,
      phoneNumber,
      email,
      blockNumber,
      streetName,
      unitNumber,
      postalCode,
    } = this.state;
    // Pass individual values into each components
    const values = {
      chooseSize,
      chooseGreens,
      chooseProtein,
      chooseSauce,
      firstName,
      lastName,
      phoneNumber,
      email,
      blockNumber,
      streetName,
      unitNumber,
      postalCode,
    };

    // For multi steps of sub components
    switch (step) {
      case 1:
        return (
          // Access next step, handleChange with props for each sub, values passing in as a prop
          <ChooseBowl
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ChooseIngredients
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 5:
        return <Confirm nextStep={this.nextStep} values={values} />;
      case 6:
        return <Success />;
    }
    return <div></div>;
  }
}

export default Order;
