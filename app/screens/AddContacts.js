import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ContactListItem from '../components/ContactListItem/ContactListItem';
import LoadingDisplay from '../components/LoadingDisplay/LoadingDisplay';
import { setFetchingContacts } from '../actions/MainActions';

class AddContacts extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    componentWillMount = () => {
        this.props.setFetchingContacts(true);
    }

    render() {
        return (
            { this.props.fetchingContacts ? <LoadingDisplay loadingText="Contacts" />  :
                <View>
                    <Text style={{fontSize: 60}}>Add Contacts Screen</Text>
                </View>
            }
        );
    }
}

const styles = EStyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        fetchingContacts: state.MainReducer.fetchingContacts,
        contacts: state.MainReducer.contacts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(getContacts()),
        setFetchingContacts: (bool) => dispatch(setFetchingContacts(bool)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContacts);
