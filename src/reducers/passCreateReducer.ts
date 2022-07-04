export type CreatePassStateType = typeof initState;

const initState = {};

export const passCreateReducer = (state: CreatePassStateType = initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};