
import React from 'react';

const divStyle = {border:'1px solid red'};


const Alerts = ({store = {}}) => (
  <div style={divStyle}>
    Alerts Atom
    <h3>verified policies in alert atom {store.policiesStore.verifiedPolicies}</h3>
  </div>
);

Alerts.propTypes = {
  store: React.PropTypes.object.isRequired
};


export default Alerts;
