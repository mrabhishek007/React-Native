import React from 'react';
import {Modal, TouchableHighlight, View, Image, Text, Button, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: "10%"

    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
});

const PlaceDetail = props => {

    if (props.selectedItem === '') return null;

    return (
        <Modal

            animationType="slide"
            transparent={false}
            visible={!!props.selectedItem}
            onRequestClose={props.onModalClosed} /*triggers on physical back btn (android)*/
        >

            <View  style={styles.container}>

                <Image style={styles.placeImage} source={{uri: props.selectedItem.image}}/>

                <Text style={styles.placeName}>{props.selectedItem.name}</Text>

                <View style={{height: '26%', justifyContent:'space-around'}}>

                    <TouchableHighlight>
                        <Button color='black' title="Delete" onPress={props.onItemDeleted}/>
                    </TouchableHighlight>

                    <TouchableHighlight>
                        <Button color='teal' title="Close" onPress={props.onModalClosed}/>
                    </TouchableHighlight>
                </View>

            </View>


        </Modal>
    );
};

export default PlaceDetail;