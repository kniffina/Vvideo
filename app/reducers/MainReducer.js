import {
    SET_FETCHING,

} from '../constants/constants';

const initialState = {
    isRecording: false,
    fetchingContacts: false,
    contacts: [],
};

const MainReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_FETCHING:
            if(action.payload === true) {
                return {
                    ...state,
                    fetchingContacts: true,
                }
            } else {
                return {
                    ...state,
                    fetchingContacts: false
                }
            }

        default:
            return state;
    }
};

export default MainReducer;
