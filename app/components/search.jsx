import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Icon name="search-outline" size={20} style={styles.leftIcon}/>
      <TextInput 
        placeholder="Search for estates"
        style={styles.input}
      />
      <Icon name="mic-outline" size={20} style={styles.rightIcon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'#f0f0f0',
    borderRadius:8,
    alignItems:'center',
    marginHorizontal:16,
    marginVertical:12,
    paddingHorizontal:8
  },
  leftIcon: {marginRight:8, color:'#888'},
  rightIcon: {marginLeft:8, color:'#888'},
  input: {flex:1, paddingVertical:8}
});
