import React from 'react';
import {StyleSheet, Image, Text, View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback} from 'react-native';


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#eeeeee',
        width: '100%',
        marginBottom: 3,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.08)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    listImage: {
        marginRight: 15,
        width: 40,
        height: 40
    }
});

const ListItem = props => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem} >

                {/*static img show*/}
                {/*<Image resizeMode='cover' style={styles.listImage} source={props.image}/> /!*default property of resizeMode is background-size:cover( in css )*!/*/}

                {/*Dynamic url image*/}
                <Image
                    resizeMode='cover'
                    style={styles.listImage}
                    source={{
                        uri: props.image
                    }}
                />

                <Text>{props.name}</Text>

            </View>
        </TouchableOpacity>
    );
};

export default ListItem;