import React, { useState } from 'react';
import { StyleSheet, View, Text, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { CountDown } from '../components/CountDown';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
import Timing from './Timing';

const ONE_SECOND_IN_MILLIS = 1000;

const Pattern = [
  1 * ONE_SECOND_IN_MILLIS,
  1 * ONE_SECOND_IN_MILLIS,
  1 * ONE_SECOND_IN_MILLIS,
  1 * ONE_SECOND_IN_MILLIS,
  1 * ONE_SECOND_IN_MILLIS,
];

type TimerProps = {
  focusSubject: string;
  onTimerend: () => void;
  clearSubject: () => void;
};

const Timer: React.FC<TimerProps> = ({ focusSubject, clearSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.5);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <CountDown
          isPaused={!isStarted}
          onProgress={setProgress}
          minutes={minutes}
          onEnd={() => {
            Vibration.vibrate(Pattern);
          }}
        />
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color={colors.progressBar}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted ? (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        ) : (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.createSubjectWrapper}>
        <RoundedButton size={50} title="-" onPress={clearSubject} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: spacing.lg,
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
    flexDirection: 'row',
  },
  createSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Timer;
