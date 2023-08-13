import { View, Text, Pressable, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function PrimaryButton({children, onPress}) {
  
  return (
    <View style={styles.buttonOuterContainer}> 
      <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer} 
      onPress={onPress} // Left onPress prop belonging to Pressable, cant change name. Right onPress is ours that we named
      android_ripple={{color: Colors.primary600}}>
          <Text style={styles.buttonText}>
            {children}
          </Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer:{
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // stops styling from going outside this container. like the ripple effect
  },
  buttonInnerContainer:{
    backgroundColor: Colors.primary500,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText:{
      color: 'white',
      textAlign: 'center',
  },
  pressed:{
    opacity: 0.75,

  }
})