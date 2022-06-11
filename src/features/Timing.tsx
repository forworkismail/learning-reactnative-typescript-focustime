import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

type TimingProps = { onChangeTime: (time: number) => void };

const Timing: React.FC<TimingProps> = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton size={75} title="30" onPress={() => onChangeTime(30)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Timing;
