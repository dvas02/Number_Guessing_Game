import { TextInput, View, StyleSheet, Alert, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react';
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";


function StartGameScreen({onPickNumber}){

  const [enteredNumber, setEnteredNumber] = useState('');

  const {width, height} = useWindowDimensions();
  
  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  }
  
  
  function resetInputHandler(){
    setEnteredNumber('');
  }
  
  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber); // Converts string to int
    
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){ 
        // Checks if the conversion worked in which case it is a proper number, or if less than zero, or if greater than 99
        
        
        Alert.alert(
          'Invalid number!', 
          'Number has to be a number between 1 and 90.',
          [{text: 'Okay', style:'destructive', onPress: resetInputHandler}]
        );
        return;
    }
    onPickNumber(chosenNumber);

  }

  const marginTopDistance = height < 400 ? 30 : 100;

  return (
    <ScrollView  style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behaviour="position">
        <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>

          <Title>Guess My Number</Title>

          <Card>
            
            <InstructionText>Enter a Number</InstructionText>
            
            
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          
          </Card>

        </View>
      </KeyboardAvoidingView>
    </ScrollView>

  )

}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: 'center',
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1
  }


});