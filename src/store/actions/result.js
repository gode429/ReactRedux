import * as actionTypes from './actionTypes';

const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

//getState is provided by redux-thunk and we can get the previous state from it
export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldState = getState().ctr.counter;
            console.log(oldState);
            dispatch(saveResult(result));
        }, 2000 );
    }
}

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
}