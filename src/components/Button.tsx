import { FC } from 'react';
import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TouchableOpacityProps & {
  text: string;
  type?: 'PRIMARY' | 'SECONDARY';
};
const { size, colors, fontSize, fonts } = Theme;
export const Button: FC<Props> = ({
  type = 'PRIMARY',
  style,
  text,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={[
          styles.button,
          {
            backgroundColor:
              type === 'SECONDARY' ? 'transparent' : colors.button,
          },
          style,
        ]}
      >
        <Text
          style={{
            fontFamily: fonts.Lexend[600],
            fontSize: type === 'SECONDARY' ? fontSize[14] : fontSize[18],
            color: type === 'SECONDARY' ? colors.black : colors.white,
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: size[52],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
