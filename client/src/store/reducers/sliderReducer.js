import { SETSIDEMENU, CURRENTSELECTEDAUDIO,CURRENTSELECTEDAUDIONAME} from '../type'

const initialState = {
    collapsed: false,
    selectedAudio: '',
    selectedAudioName: {name:'',path:''},

}

const sliderReducer = (state = initialState, action) => {
    console.log('Reducer', action.payload)
    switch (action.type) {

        case SETSIDEMENU:
            return {
                collapsed: action.payload
            }
        case CURRENTSELECTEDAUDIO:
            return {
                selectedAudio: action.payload
            }
        case CURRENTSELECTEDAUDIONAME:
        console.log('Reducer CURRENTSELECTEDAUDIONAME', action.payload)

            return {
                selectedAudioName: action.payload
            }
        default: return state
    }
}
export default sliderReducer
