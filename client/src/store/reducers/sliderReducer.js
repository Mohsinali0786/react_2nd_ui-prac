import {SETSIDEMENU} from '../type'

const initialState = {
    collapsed:false
}

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {

        case SETSIDEMENU:
            return {
                collapsed:action.payload
            }
        default: return state
    }
}
export default sliderReducer
