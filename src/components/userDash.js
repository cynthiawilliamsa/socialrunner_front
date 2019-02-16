import React, { Component } from "react";
import Nav from "./nav";
import { Container, Row, Col } from "reactstrap";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_RACE = gql`
mutation MyCreateRaceMutation($input: Socialrunner_createRaceInput!) {
    createRace : Socialrunner_createRace(input: $input) {
      node {

        location
        time
        distance
      }
    }
   }
`;

class UserDash extends Component {
  render() {
    return (
      <div>
          <AddRace/>
          </div>
        
    );
  }
}

const AddRace = () => {
    let locationInput;
    let distanceInput;
    let timeInput;
    let user = "U29jaWFscnVubmVyX1VzZXI6NA";
  
    return (
      <Mutation mutation={ADD_RACE}>
        {(addRace, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addRace({ variables: { input: {
                    location: locationInput.value,
                    distance: distanceInput.value,
                    time: timeInput.value,
                    user: user
                } } });
                locationInput.value = "";
                distanceInput.value = "";
                timeInput.value = "";
              }}
            >
              <input
                ref={node => {
                    locationInput = node;
                }}
              />
                  <input
                ref={node => {
                    distanceInput = node;
                }}
              />
                  <input
                ref={node => {
                    timeInput = node;
                }}
              />
              <button type="submit">Add Race</button>
            </form>
          </div>
        )}
      </Mutation>
    );
  };
export default UserDash;
