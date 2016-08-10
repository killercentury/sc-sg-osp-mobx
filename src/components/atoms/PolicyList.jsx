
import React from 'react';

const divStyle = {border:'1px solid red'};


const PolicyList = ({store = {}}) => (
  <div style={divStyle}>
    Policy List Atom
       <ul>
          {store.policiesStore.policies.map(function(listValue){
            return <li key={listValue.id}>Policy Id : {listValue.id}
            {!listValue.verified ? <button onClick={store.policiesStore.verifyPolicy.bind(store.policiesStore, listValue.id)}>Please Verify</button>: null }
            </li>;
          })}
        </ul>
      </div>
);

PolicyList.propTypes = {
  store: React.PropTypes.object.isRequired
};


export default PolicyList;
