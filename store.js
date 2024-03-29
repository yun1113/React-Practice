import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducer'
import saga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(saga)


export default store;
