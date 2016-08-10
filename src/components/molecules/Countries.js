
import React from 'react';
import ShouldAuthenticate from '../../helper/Authenticator';
import CountryList from '../atoms/CountryList';

const Countries = React.createClass({
  getInitialState: function() {
    return { country: [] };
  },

  componentDidMount: function() {
    this.props.axiosProvider.get('https://restcountries.eu/rest/v1/')
    .then(function (response) {
      this.setState({ country: response.data});
    }.bind(this)).
    catch(function(error){
      console.log('error');
    });
  },

  render: function() {
    return <div>
      <CountryList state={this.state} />
   </div>;
 }
 });

 export default ShouldAuthenticate(Countries);
