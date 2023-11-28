import {Dimensions, PixelRatio} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const reasponsiveWidth = w => {
  return PixelRatio.roundToNearestPixel(windowWidth * (w / 100));
};

export const reasponsiveHeight = h => {
  return PixelRatio.roundToNearestPixel(windowHeight * (h / 100));
};

const scale = windowWidth / 320;

export const reasponsiveFont = size => {
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};
