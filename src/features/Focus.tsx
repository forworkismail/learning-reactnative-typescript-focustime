import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';

const Focus: React.FC = () => {
  const [subject, setSubject] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="What would you like to focus on?"
          onChangeText={(text: string) => setSubject(text)}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    // justifyContent: 'space-between',
    alignContent: 'space-between',
    padding: 25,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    justifyContent: 'center',
  },
});

export default Focus;
