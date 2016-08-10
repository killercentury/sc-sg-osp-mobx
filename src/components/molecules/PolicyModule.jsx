import React from 'react';
import { observer } from 'mobx-react';
import PolicyList from '../atoms/PolicyList';
import injectStore from '../../store/StoreInjector';

@observer
class PolicyModule extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div>
        <h3>verified policies in policy module  {this.store.policiesStore.verifiedPolicies}</h3>
        <PolicyList store={this.store}
           />
      </div>
    );
  }
}

PolicyModule.propTypes = {
  store: React.PropTypes.object
}

export default injectStore(PolicyModule);
