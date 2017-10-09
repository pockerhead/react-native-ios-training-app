import React, {Component} from 'react';
import { Provider } from 'react-redux';
import CompApp from './src/components/CompApp';
import configureStore from './src/store/configureStore'

const store = configureStore()
console.log(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CompApp />
      </Provider>
    );
  }
}
