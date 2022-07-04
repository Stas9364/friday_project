export type LoginStateType = typeof initState;

const initState = {};

export const loginReducer = (state: LoginStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};