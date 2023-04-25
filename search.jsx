import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = () => {

  const DATA = [
    {value: 1, label: 'Java'},
    {value: 2, label: 'Python'},
    {value: 3, label: 'C#'},
    {value: 4, label: 'Dart'},
    {value: 5, label: 'Ruby'},
    {value: 6, label: 'PHP'},
    {value: 7, label: 'Kotlin'},
    {value: 8, label: 'JavaScript'},
    {value: 9, label: 'Swift'},
    {value: 10, label: 'Scala'},
    {value: 11, label: 'R'},
    {value: 12, label: 'Go lang'},
  ];

  const [list, setList] = useState(DATA);
  const [search, setSearch] = useState(null);

  const filterList = (item) => {
    const newList = DATA.filter((val) => val.label.toLocaleLowerCase().indexOf(item.toLocaleLowerCase()) >= 0);
    setList(newList);
  }

  useEffect(() => {
    if(search !== null) {
      filterList(search);
    }
  }, [search]);
  
  return(
    <View>
      <View style={styles.search}>
        <View style={styles.icon}>
          <Icon name="search" size={20} color='#FFFFFF' />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          onChangeText={(val) => setSearch(val)}
        />
      </View>
      <View>
        <FlatList
          data={list}
          key={({item}) => item.value}
          renderItem={({item}) => {
            return(
              <View style={styles.listItem}>
                <Text style={styles.listText}>{item.label}</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
};

export default SearchBar;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#EBE9E9',
    margin: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: '#004c4c',
    padding: 15,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  listItem: {
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#F3F0F0',
    padding: 10,
    borderRadius: 5,
  },
  listText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
})

