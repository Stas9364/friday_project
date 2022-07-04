export type ProfileStateType = typeof initState;

const initState = {};

export const profileReducer = (state: ProfileStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};