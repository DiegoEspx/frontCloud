// //manejo inicial del redux para almacenamiento de usuario
// import {configureStore, combineReducers} from '@reduxjs/toolkit';
// import {persistStore, persistReducer} from 'redux-persist';
// import salasReducer from './salas';
// // import videosReducer from './videos';
// // import likeReducer from './likes';
// import storage  from 'redux-persist/lib/storage';

// const reducer = combineReducers({
//     salas: salasReducer,
// });

// const persistConfg = {
//     key: 'root',
//     storage: storage,
//     whilelist: [], //pasa lo que se quiere que se guarde en el localstorage
//     blacklist: [], //pasa lo que se quiere que no se guarde en el localstorage
// }

// const persistedReducer = persistReducer(persistConfg, reducer);

// export const store = configureStore({
//     reducer: persistedReducer
// })

// export const persistor = persistStore(store);