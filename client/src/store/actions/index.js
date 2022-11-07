import {SETSIDEMENU} from '../type'

export const setcollapsed = () => async (dispatch) => {
    // console.log("SignU Data", data)
    dispatch({
        type: SETSIDEMENU,
        payload: true
    })
}