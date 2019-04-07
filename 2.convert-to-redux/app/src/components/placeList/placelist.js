import React, {Component} from 'react';
import {ScrollView, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import ListItem from "../listItem/listItem";

const styles = StyleSheet.create({
    listContainer: {
        width: '100%',
    }
});


class PlaceList extends Component {

    /*    // using ScrollView Rendering the list
        render() {
            const {onItemDelete, placeList} = this.props;

            return (
                <ScrollView style={styles.listContainer}>
                    {placeList.map((place, i) => (
                        <TouchableOpacity  key={i}>
                            <ListItem onItemPressed={() => onItemDelete(i)}  place={place}/>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            );
        }*/

    // using FlatList(ListView) Rendering the list
    render() {
        const {onItemSelect, placeList, selectedItem} = this.props;

        return (
            <FlatList
                // keyExtractor is not required if an obj contain key property, react native will automatically set key to the key property otherwise if key property not available manually define like below
                // keyExtractor ={place => place.key.toString()} /*key property required in every item. val must be string */
                data={placeList}
                style={styles.listContainer}
                renderItem={(info) => (
                    /*return data source for every place in List View*/
                    <ListItem
                        image={info.item.image}
                        onItemPressed={() => onItemSelect(info.item.key)}
                        name={info.item.name}/>
                )}
            />
        )
    }

}

export default PlaceList;


