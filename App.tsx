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

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        {!currentSubject ? (
          <Focus addSubject={setCurrentSubject} />
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerend={() => {}}
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
