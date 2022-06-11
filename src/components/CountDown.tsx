import React, { useState, useEffect, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';

import { fontSizes, spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

const minutesToMillis = (min: number) => min * 1000 * 60;
const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

type CountDownProps = {
  minutes: number;
  isPaused: boolean;
  onProgress: (progress: number) => void;
  onEnd: () => void;
};

export const CountDown: React.FC<CountDownProps> = ({
  minutes = 0.1,
  isPaused,
  onProgress,
  onEnd,
}) => {
  const interval: { current: NodeJS.Timer | null } =
    useRef<NodeJS.Timer | null>(null);

  const [millis, setMillis] = useState(0);

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current as NodeJS.Timer);
        onEnd();
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current as NodeJS.Timer);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)',
  },
});
