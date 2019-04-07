import React, {Component} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 25,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    textInput: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
    btn: {
        color: '#000'
    },
});


class PlaceInput extends Component {

    state= {
        placeName: ''
    };

    handleTextChange = (placeName) => {
        this.setState({placeName});
    };



    render() {
        const  { onBtnPress } = this.props;
        return (
            <View style={styles.inputContainer}>

                <TextInput
                    auroFocus={false}
                    style={styles.textInput}
                    value={this.state.placeName}
                    placeholder={'Type here'}
                    placeholderTextColor={'black'}
                    onChangeText={this.handleTextChange}

                />

                <Button
                    onPress={() => onBtnPress(this.state.placeName)}
                    style={styles.btn}
                    title='Submit'
                />

            </View>
        );
    }
}

export default PlaceInput;