import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {passCreateReducer} from "../reducers/passCreateReducer";
import {errorReducer} from "../reducers/errorReducer";
import {loginReducer} from "../reducers/loginReducer";
import {passRecoveryReducer} from "../reducers/passRecoveryReducer";
import {profileReducer} from "../reducers/profileReducer";
import {testReducer} from "../reducers/testReducer";
import {registrationReducer} from "../reducers/registrationReducer";

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AnyAction>;
export type AppActionsType = '';
export type AppThunk <ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AnyAction>


const rootReducer = combineReducers({
    createPassState: passCreateReducer,
    errorState: errorReducer,
    loginState: loginReducer,
    passRecoveryState: passRecoveryReducer,
    profileState: profileReducer,
    registrationState: registrationReducer,
    testState: testReducer
});


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));