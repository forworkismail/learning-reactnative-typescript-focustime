import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../utils/colors';

const Focus: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Focus Feature</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default Focus;
