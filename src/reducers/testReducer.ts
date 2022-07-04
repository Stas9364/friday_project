export type TestStateType = typeof initState;

const initState = {};

export const testReducer = (state: TestStateType= initState, actions: any) => {
    switch (actions.type) {


        default:
            return state;
    }
};