import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const CATEGORIES = ["All", "House", "Apartment", "Office"];
export default function CategorySlider({ selected, onSelect }) {
  return (
    <FlatList
      data={CATEGORIES}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={i => i}
      contentContainerStyle={{paddingHorizontal:16}}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => onSelect(item)}
          style={[styles.btn, selected===item && styles.btnSelected]}
        >
          <Text style={[styles.txt, selected===item && styles.txtSelected]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  btn: {
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:20,
    paddingHorizontal:16,
    paddingVertical:8,
    marginRight:12
  },
  btnSelected: {
    backgroundColor:'#4e8cff',
    borderColor:'transparent'
  },
  txt: {
    color:'#555',
    fontWeight:'500'
  },
  txtSelected: {
    color:'#fff'
  }
});
