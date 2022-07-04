export type RegistrationStateType = typeof initState;

const initState = {};

export const registrationReducer = (state: RegistrationStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};