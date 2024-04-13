import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../constants/colors';
import {BlurView} from '@react-native-community/blur';

interface Restaurant {
  id: string;
  restaurantName: string;
  timeDurationMinutes: number;
  priceInDollars: number;
  discountPercentage: number;
  distanceRating: number;
  liked: boolean;
  shareLink: string;
  image: string;
}

export const renderItem = ({item}: {item: Restaurant}) => (
  <View style={styles.itemContainer}>
    <ImageBackground source={{uri: item.image}} style={styles.image}>
      <View style={styles.firstInnerContainer}>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} color={'white'} />
          <Text style={styles.ratingText}>{item.distanceRating}</Text>
        </View>
        <View
          style={{
            width: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.iconButton}>
            <AntDesign
              name={item.liked ? 'heart' : 'hearto'}
              size={16}
              color={item.liked ? 'yellow' : 'white'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <BlurView
        blurType="light"
        blurAmount={2}
        blurRadius={4}
        style={styles.overlay}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingBottom: 5,
          }}>
          <Text style={styles.restaurantName}>{item.restaurantName}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesome name="dollar" size={18} color={'white'} />
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              {item.priceInDollars}/-
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="clockcircle" size={16} color={'white'} />
            <Text style={{color: 'white'}}>
              {' '}
              {item.timeDurationMinutes} mins • {item.distanceRating} km
            </Text>
          </View>
          <View style={styles.discountContainer}>
            <Text style={{fontSize: 12}}>{item.discountPercentage}% OFF</Text>
          </View>
        </View>
      </BlurView>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    height: 200,
    width: '100%',
    //   backgroundColor:'red'
  },
  firstInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingTop: 20,
  },
  overlay: {
    backgroundColor: 'rgba(2,10,0,0.4)',
    height: '35%',
    padding: 10,
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    width: 60,
    height: 33,
    backgroundColor: COLORS.orange,
    paddingVertical: 5,
    paddingRight: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  ratingText: {
    fontWeight: 'bold',
    color: COLORS.white,
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
  iconButton: {
    borderWidth: 0.5,
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: 'rgba(10,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discountContainer: {
    width: 65,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 2,
    opacity: 0.8,
  },
});
