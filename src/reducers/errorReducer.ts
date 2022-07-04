export type ErrorStateType = typeof initState;

const initState = {};

export const errorReducer = (state: ErrorStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};