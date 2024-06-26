import React from 'react';
import {
  Alert,
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import {COLORS} from '../constants/colors';

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function BottomtabNavigator() {
  const _renderIcon = (routeName: string, selectedTab: string) => {
    let icon = 'home';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Follow':
        icon = 'heart-outline';
        break;
      case 'Trending':
        icon = 'trending-up-outline';
        break;
      case 'Profile':
        icon = 'person-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'orange' : 'white'}
      />
    );
  };
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
        <Text style={{color: 'white'}}>{routeName}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <CurvedBottomBar.Navigator
          type="DOWN"
          style={styles.bottomBar}
          shadowStyle={styles.shawdow}
          height={60}
          circleWidth={60}
          bgColor={'black'}
          initialRouteName="title1"
          borderTopLeftRight={false}
          renderCircle={({selectedTab, navigate}) => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert('Click Action')}>
                <AntDesign name={'plus'} color="white" size={35} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="Home"
            position="LEFT"
            component={() => <Home />}
          />
          <CurvedBottomBar.Screen
            name="Follow"
            position="LEFT"
            component={() => <Screen1 />}
          />
          <CurvedBottomBar.Screen
            name="Trending"
            component={() => <Screen2 />}
            position="RIGHT"
          />
          <CurvedBottomBar.Screen
            name="Profile"
            component={() => <Screen2 />}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 75,
    height: 75,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    bottom: 43,
    shadowColor: COLORS.yellow,
    shadowOffset: {
      width: 3,
      height: 3.5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4.41,
    elevation: 10,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
