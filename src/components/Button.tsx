import { FC } from 'react';
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Text,
} from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TouchableOpacityProps & {
  text: string;
};
export const Button: FC<Props> = ({ text, ...props }) => {
  const { size, colors, fontSize, fonts } = Theme;
  return (
    <TouchableOpacity {...props}>
      <View
        style={{
          width: '100%',
          height: size[52],
          backgroundColor: colors.button,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontFamily: fonts.Lexend[600],
            fontSize: fontSize[20],
            color: colors.white,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
