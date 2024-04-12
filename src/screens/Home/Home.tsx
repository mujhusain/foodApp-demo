import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../constants/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from '../../components/SearchBar';
import {dataList} from '../../constants/dummyData';
import {renderItem} from '../../components/RestaurantListitem';
export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollViewContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftNavBtn}>
              <Icon name="bars" size={25} color={'white'} />
            </View>
            <View style={styles.locationContainer}>
              <View style={styles.locationLabelContainer}>
                <Text style={styles.locationContainerText}>Location</Text>
                <Icon name="down" size={16} color={COLORS.white} />
              </View>
              <View>
                <Text style={styles.locationName}>AR Mall, New York</Text>
              </View>
            </View>
            <View style={styles.leftNavBtn}>
              <Image
                style={styles.profileImage}
                width={45}
                height={45}
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/girl-red-dress-14445587.jpg',
                }}
              />
            </View>
          </View>
          <View style={styles.searchContainer}>
            <SearchBar
              onSearch={() => {}}
              onCheck={() => Alert.alert('Hi i am search component')}
            />
          </View>
          <View style={styles.listContainer}>
            <View style={styles.listTitle}>
              <Text style={{color: 'white', fontSize: 19, lineHeight: 30}}>
                Restaurants near by you
              </Text>
            </View>
            <FlatList
              data={dataList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              style={styles.container}
              nestedScrollEnabled={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  searchContainer: {
    marginTop: 20,
  },
  leftNavBtn: {
    borderWidth: 1,
    borderColor: COLORS.darkGray,
    height: 45,
    width: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileImage: {
    resizeMode: 'cover',
    width: 45,
    height: 45,
  },
  locationContainer: {
    borderWidth: 1,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationLabelContainer: {
    flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationContainerText: {
    color: COLORS.white,
  },
  locationName: {
    color: COLORS.yellow,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    fontSize: 17,
    lineHeight: 20,
  },
  listContainer: {
    flex: 1,
    borderColor: 'white',
    paddingTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  listTitle: {},
});
