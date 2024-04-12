import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // You may need to install 'expo' package for this
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {COLORS} from '../constants/colors';

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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 20,
          paddingTop: 20,
        }}>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={16} />
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
              color={item.liked ? 'yellow' : 'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="share" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.overlay}>
        <View style={styles.infoContainer}>
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
                {item.priceInDollars}
              </Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome6 name="clock" size={16} color={'white'} />
              <Text style={{color: 'white'}}> {" "}
                {item.timeDurationMinutes} mins  •  {item.distanceRating} km
              </Text>
            </View>
            <View
              style={{
                width: 65,
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingVertical: 2,
                opacity: 0.8,
              }}>
              <Text style={{fontSize: 12}}>{item.discountPercentage}% OFF</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: '#fff',
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
  overlay: {
    backgroundColor: 'rgba(2,10,0,0.5)',
    //   justifyContent: 'space-between',
    height: '35%',
    padding: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    width: 60,
    height: 33,
    backgroundColor: COLORS.yellow,
    paddingVertical: 5,
    paddingRight: 5,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    // alignSelf: 'flex-start',
    justifyContent: 'space-evenly',
  },
  ratingText: {
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    // marginBottom: 5,
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
});
