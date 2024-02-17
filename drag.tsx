import React, { useState } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';

const Drags = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ]);

  const handleRemove = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      Animated.timing(itemPosition[gesture.index].x, {
        toValue: gesture.dx,
        duration: 100,
        useNativeDriver: true,
      }).start();
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx < -100) {
        handleRemove(items[0].id);
      }
    },
  });

  const [itemPosition, setItemPosition] = useState(
    items.map((_, index) => new Animated.ValueXY())
  );

  return (
    <View>
      {items.map((item, index) => (
        <Animated.View
          key={item.id}
          style={{
            transform: itemPosition[index].getTranslateTransform(),
          }}
          {...panResponder.panHandlers}
        >
          <Text>{item.text}</Text>
        </Animated.View>
      ))}
    </View>
  );
};

export default Drags;