import {SETSIDEMENU,CURRENTSELECTEDAUDIO,CURRENTSELECTEDAUDIONAME} from '../type'

export const setcollapsed = (setcollapsed) => async (dispatch) => {
    console.log("SignU Data", setcollapsed)
    dispatch({
        type: SETSIDEMENU,
        payload: setcollapsed
    })
}
export const selectedAudio = (audioTime) => async (dispatch) => {
    console.log("audioName", audioTime)
    dispatch({
        type: CURRENTSELECTEDAUDIO,
        payload: audioTime
    })
}
export const selectedAudioName = (audioName) => async (dispatch) => {
    console.log("audioName", audioName)
    dispatch({
        type: CURRENTSELECTEDAUDIONAME,
        payload: audioName
    })
}