import { View } from 'react-native';

import { Theme } from '../styles/Theme';
const { colors } = Theme;
export const LineEmpty = () => (
  <View
    style={{
      height: 2,
      width: 40,
      backgroundColor: colors.black,
    }}
  />
);
