import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

type FocusHistoryProps = { history: string[] };

const FocusHistory: React.FC<FocusHistoryProps> = ({ history }) => {
  if (!history || !history.length)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>We haven't focused on anything yet</Text>;
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => <Text style={styles.item}>- {item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  item: {
    marginTop: 10,
    fontSize: fontSizes.md,
    color: colors.white,
  },
  title: {
    marginBottom: 10,
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});

export default FocusHistory;
