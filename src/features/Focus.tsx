import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

type FocusProps = { addSubject: (subject: string) => void };

const Focus: React.FC<FocusProps> = ({ addSubject }) => {
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
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    // justifyContent: 'space-between',
    alignContent: 'space-between',
    padding: spacing.lg,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
});

export default Focus;
