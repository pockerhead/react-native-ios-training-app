import {combineReducers, createStore} from 'redux'
import reducer from '../reducers/reducer'
import {loadState, saveState} from './AsyncStorage'
import devToolsEnhancer from 'remote-redux-devtools';

const rootReducer = combineReducers({reducer});

export default function configureStore() {
  let persistedState = loadState();
  let store = createStore(rootReducer, persistedState,devToolsEnhancer({ realtime: true }));
  store.subscribe(()=>{
    saveState(store.getState());
  })
  console.log(store)
  return store
}