export type PassRecoveryStateType = typeof initState;

const initState = {};

export const passRecoveryReducer = (state: PassRecoveryStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};