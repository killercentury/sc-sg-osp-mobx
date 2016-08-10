
import React from 'react';

const divStyle = {border:'1px solid red'};


const CountryList = ({state = {}}) => (
  <div style={divStyle}>
    Country List Atom
    <ul>
      {state.country.map(function(listValue){
        return <li key={listValue.name}> {listValue.name}
        </li>;
      })}
    </ul>
      </div>
);

CountryList.propTypes = {
  state: React.PropTypes.object.isRequired
};


export default CountryList;
