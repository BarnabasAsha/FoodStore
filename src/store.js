import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const persistedReducer = persistReducer(configStorage, rootReducer)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunkMiddleware),
    )
  );


  

export const persistor = persistStore(store)
  