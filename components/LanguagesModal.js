import React from 'react';
import { View, Text, FlatList,  StyleSheet} from 'react-native';

const LanguagesModal = props => {
    
    console.log(props.isModalVisible)
    return (
       <View>
         
           <FlatList
           data={props.isModalVisible.languages}
           renderItem={({ item }) => (
           <Country
            style={styles.separator}
            country={item}
            />
             )}
        
            />
       </View>
    );
};

const Country = ({ Country }) => {
    return (
      <View style={styles.countryContainer}>
        <Text>{country.name}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    countryContainer: {
        marginBottom: 20
    }, 
    separator: {
        height: 2,
        backgroundColor: "grey",
        margin: 2
      }
  })

export default LanguagesModal;