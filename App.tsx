import React from 'react';

import BottomtabNavigator from './src/navigation/BottomTabBar';
import {StyleSheet, View} from 'react-native';
import {COLORS} from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <BottomtabNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: COLORS.black10},
});
