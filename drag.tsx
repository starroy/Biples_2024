import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

const Basic = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'John', avatar: require('./assets/images/follow2.png') },
    { id: '2', name: 'Jane', avatar: require('./assets/images/follow2.png') },
    { id: '3', name: 'Bob', avatar: require('./assets/images/follow2.png') },
    { id: '4', name: 'Alice', avatar: require('./assets/images/follow2.png') },
    { id: '5', name: 'Mike', avatar: require('./assets/images/follow2.png') },
  ]);

  const handleDelete = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const [color, setColor] = useState('white');
  const renderHiddenItem = (data, rowMap) => {
    const swipeAnimatedValue = new Animated.Value(0);
    const backgroundColor = swipeAnimatedValue.interpolate({
      inputRange: [-75, 0, 75],
      outputRange: ['white', 'green', 'blue'],
    });

    return (
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          justifyContent: 'flex-end',
          flexDirection: 'row',
        }}
      >
        <TouchableOpacity
          style={{ backgroundColor: 'red', justifyContent: 'center', alignItems: 'flex-end', padding: 20 }}
          onPress={() => handleDelete(data.item.id)}
        >
          <Image source={require('./assets/images/review.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const renderItem = ({item, index}) => (
    <View style={{ backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#ccc', padding: 20 }}>
      <Text>{item.name}</Text>
    </View>
  );

  onSwipeValueChange = (swipeData, key) => {
    console.log(key)
  const { value, direction } = swipeData;
  console.log(
    `Row Key: ${key} | Value: ${value} | Direction: ${direction}`
  );
}
  return (
    <SwipeListView
      data={items}
      key={items.id}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-75}
      onSwipeValueChange={(swipeData, key)=> onSwipeValueChange(swipeData, key)}
    />
  );
};

export default Basic;
