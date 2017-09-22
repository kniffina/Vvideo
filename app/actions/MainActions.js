import { SET_FETCHING } from '../constants/constants';
import { NavigationActions } from 'react-navigation';
import { firebaseRef } from '../services/Firebase';
import * as Firebase from 'firebase';

// export const openDrawer = (navigation) => {
//     return navigation.navigate('DrawerOpen');
// };

export const setFetchingContacts = (bool) => {
    console.log(payload);
    return {
        type: SET_FETCHING,
        payload: bool,
    }
};
