import {
    OPEN_DRAWER,

} from '../constants/constants';

const initialState = {
    isRecording: false,

};

const MainReducer = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_DRAWER:
            return {
                ...state,

            };

        default:
            return state;
    }
};

export default MainReducer;