import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import ContactListItem from '../components/ContactListItem/ContactListItem';

class AddContacts extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 60}}>Add Contacts Screen</Text>
            </View>
        );
    }
}

const styles = EStyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
        isFetching: state.LoginSignUp.isFetching,
        contacts: state.LoginSignUp.contacts,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => dispatch(getContacts()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContacts);