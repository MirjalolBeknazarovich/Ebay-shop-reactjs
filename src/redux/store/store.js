import { createStore } from "redux";
import rootReducer from "../rootReducer";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'reducer', 
    storage: storage,
    whitelist: [ 'likedReducer', 'watchlistReducer', 'addBasketReducer', 'createReducer' ]
}

const persistedReducer = persistReducer( persistConfig, rootReducer )


const store = createStore(persistedReducer);
const persistor = persistStore( store )

export { store, persistor }