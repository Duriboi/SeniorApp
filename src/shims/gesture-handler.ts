import React from 'react';
import { View } from 'react-native';

export const GestureHandlerRootView = View;
export const PanGestureHandler = View;
export const TapGestureHandler = View;
export const State = {};
export const Directions = {};
export const Gesture = {
  Pan: () => ({
    onStart: () => ({ onUpdate: () => ({ onEnd: () => ({}) }) }),
  }),
};
export const GestureDetector = ({ children }: any) => children;
export const ScrollView = View;
export const FlatList = View;
export const Switch = View;
export const TextInput = View;
export const DrawerLayoutAndroid = View;
export const TouchableOpacity = View;
export const TouchableHighlight = View;
export const TouchableNativeFeedback = View;
export const TouchableWithoutFeedback = View;
export default {
  GestureHandlerRootView,
  PanGestureHandler,
  TapGestureHandler,
  State,
  Directions,
  Gesture,
  GestureDetector,
};
