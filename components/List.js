import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Modal, ActivityIndicator} from 'react-native';
import LanguagesModal from './LanguagesModal'

const List = () => {
    const [countries, setCountries] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false)

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
          .then(response => response.json())
          .then(data => setCountries(data))
      }, [])


      if ( !countries){
          return (
            <View>
                <ActivityIndicator size="large" color="black" />
             </View>
          )
      }

    return (
        <View>
           <Text>HELLO</Text>
           { isModalVisible &&
           <Modal
            title="Title"
            visible={isModalVisible}
            >
                <Pressable  onPress={() => setIsModalVisible(false) }>
                    <LanguagesModal isModalVisible={isModalVisible}/> 
                </Pressable>
            </Modal>
            }
           <FlatList
           data={countries}
           renderItem={({ item }) => (
           <Countries
            style={styles.separator}
            countrie={item}
            onPress={() => setIsModalVisible(item) }
            />
            )}
        
            />
       </View>
    );
};


const Countries = ({ countrie, onPress }) => {
    return (
      <Pressable onPress={onPress} style={styles.countriesContainer}>
        <Text>{countrie.name}</Text>
        <Text>{countrie.capital}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    countriesContainer: {
        marginBottom: 20
    }, 
    separator: {
        height: 2,
        backgroundColor: "grey",
        margin: 2
      }
  })

export default List;