import {SETSIDEMENU} from '../type'

export const setcollapsed = (setcollapsed) => async (dispatch) => {
    console.log("SignU Data", setcollapsed)
    dispatch({
        type: SETSIDEMENU,
        payload: setcollapsed
    })
}