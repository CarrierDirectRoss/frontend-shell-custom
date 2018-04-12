import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
