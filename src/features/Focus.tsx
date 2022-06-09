import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';

const Focus: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput label="What would you like to focus on?"></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.5,
    justifyContent: 'flex-start',
    padding: 25,
  },
  text: {
    color: colors.white,
  },
});

export default Focus;
