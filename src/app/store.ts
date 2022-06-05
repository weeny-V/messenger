import {
    configureStore,
    ThunkAction,
    Action,
    applyMiddleware,
    combineReducers,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk'
import mainReducer from '../redux/reducers/MainSlice';
import ProfileReducer from '../redux/reducers/ProfileSlice';
import ContactReducer from '../redux/reducers/ContactSlice';
import { rootSaga } from '../redux/sagas/sagas';

let sagaMiddleware = createSagaMiddleware();


const reducers = combineReducers( {
    main: mainReducer,
    profile: ProfileReducer,
    contact: ContactReducer,
} )

export const store = configureStore( {
    reducer: reducers,
    middleware: [thunkMiddleware, sagaMiddleware]
} );

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
