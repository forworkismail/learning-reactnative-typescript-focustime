import React, { useState } from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Focus from './src/features/Focus';
import { colors } from './src/utils/colors';
import { Provider as PaperProvider } from 'react-native-paper';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <>
            <Focus addSubject={setCurrentSubject} />
            <FocusHistory history={history} />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject]);
            }}
            clearSubject={() => {
              setCurrentSubject('');
            }}
          />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
