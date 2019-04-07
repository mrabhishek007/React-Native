/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PlaceInput from "./src/components/placeInput/placeinput";
import PlaceList from "./src/components/placeList/placelist";
import placeImage from "./src/assets/profile.jpg"; // static image import (we can also use require('img-path'))
import PlaceDetail from "./src/components/placeDetail/placeDetail";
import {connect} from 'react-redux';
import {deSelectPlace, selectPlace, deletePlace, addPlace} from './store/actions/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    listContainer: {
        width: '100%'
    }
});


class App extends Component {


    handleBtnPress = placeName => {
        console.log(placeName); // debug in chrome using 'http://localhost:8081/debugger-ui/' but first enable Remote JS Debugging from device
        this.props.onAddPlace(placeName);
    };

    handleItemSelect = key => {
        this.props.onSelectPlace(key);
    };

    handleItemDeleted = () => {
        this.props.onDeletePlace();
    };

    handleModalClose = () => {
        this.props.onDeselectPlace();
    };


    render() {

        const {placeList, selectedPlace} = this.props;

        return (
            <View style={styles.container}>

                <PlaceDetail
                    onItemDeleted={this.handleItemDeleted}
                    onModalClosed={this.handleModalClose}
                    selectedItem={selectedPlace}/>

                <PlaceInput onBtnPress={this.handleBtnPress}/>

                {placeList.length > 0 && <Text style={{margin: 10}}>{placeList.length} Items Available</Text>}
                {!placeList.length && <Text style={{margin: 10}}>No Items Available</Text>}

                <PlaceList placeList={placeList} onItemSelect={this.handleItemSelect}/>

            </View>
        )

    }
}

// this will map to default props of this component so we can access user using 'this.pros.user'
const mapsStateToProps = (state) => {
    return {
        placeList: state.places.placeList, // places is a reducer
        selectedPlace: state.places.selectedPlace,
    }
};

// this will handle dispatch to reducer and store will be updated
const mapsDispatchToProps = (disaptch) => {
    return {
        onAddPlace: name => disaptch(addPlace(name)),
        onDeletePlace: () => disaptch(deletePlace()),
        onSelectPlace: key => disaptch(selectPlace(key)),
        onDeselectPlace: () => disaptch(deSelectPlace())
    }
};


export default connect(mapsStateToProps, mapsDispatchToProps)(App);
