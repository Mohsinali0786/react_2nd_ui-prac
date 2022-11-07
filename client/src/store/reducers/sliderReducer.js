import {SETSIDEMENU} from '../type'

const initialState = {
    collapsed:false
}

const sliderReducer = (state = initialState, action) => {
    console.log('Reducer',action.payload)
    switch (action.type) {

        case SETSIDEMENU:
            return {
                collapsed:action.payload
            }
        default: return state
    }
}
export default sliderReducer
