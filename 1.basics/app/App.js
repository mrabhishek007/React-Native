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


export default class App extends Component {

    state = {
        placeList: [],
        selectedPlace: '',
    };



    handleBtnPress = placeName => {
        if (placeName.trim() === '') return;

        this.setState(prevState => {
            return {
                placeList: prevState.placeList.concat({
                    key: Math.random().toString(),
                    name: placeName,
                    // image: placeImage // static image
                    image: "https://public-media.si-cdn.com/filer/45/3b/453b8165-0d4e-4372-a55a-46d4b9cfdfe1/taj_mahal.jpg"
                })
            }
        });
    };

    handleItemSelect = key => {
        this.setState(prevstate => {
            const selectedPlace = prevstate.placeList.find(item => item.key === key);
            if (selectedPlace === -1) return {selectedPlace: ''};
            return {selectedPlace};
        })
    };

    handleItemDeleted = () => {
        this.setState(prevstate => {
            const placeList = prevstate.placeList.filter(item => item.key !== prevstate.selectedPlace.key);
            return {
                placeList,
                selectedPlace: ''
            };
        })
    };

    handleModalClose = () => {
        this.setState({selectedPlace: ''});
    };


    render() {

        const {placeList, selectedPlace} = this.state;

        return (
            <View style={styles.container}>

                <PlaceDetail
                    onItemDeleted={this.handleItemDeleted}
                    onModalClosed={this.handleModalClose}
                    selectedItem={selectedPlace}/>

                <PlaceInput onBtnPress={this.handleBtnPress}   />

                {placeList.length > 0 && <Text style={{margin: 10}}>{placeList.length} Items Available</Text>}
                {!placeList.length && <Text style={{margin: 10}}>No Items Available</Text>}

                <PlaceList placeList={placeList} onItemSelect={this.handleItemSelect}/>

            </View>
        )

    }
}



