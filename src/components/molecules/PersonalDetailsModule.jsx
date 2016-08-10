import React from 'react';
import { observer } from 'mobx-react';
import Alerts from '../atoms/Alerts';
import PersonalDetails from '../atoms/PersonalDetails';
import injectStore from '../../store/StoreInjector';

@observer
class PersonalDetailsModule extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>
        <Alerts store={this.store}/>
        <PersonalDetails store={this.store}/>
         <h3>verified policies  {this.store.policiesStore.verifiedPolicies}</h3>
      </div>
    );
  }
}

PersonalDetailsModule.propTypes = {
  store: React.PropTypes.object
}

export default injectStore(PersonalDetailsModule);
