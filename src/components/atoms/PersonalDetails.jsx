
import React from 'react';

const divStyle = {border:'1px solid red'};


const PersonalDetails = ({store = {}}) => (
  <div style={divStyle}>
    Personal Details Atom
    <h3>Your name : {store.personalDetailsStore.name}</h3>
    <h3>Your address : {store.personalDetailsStore.address}</h3>
  </div>
);

PersonalDetails.propTypes = {
  store: React.PropTypes.object.isRequired
};


export default PersonalDetails;
