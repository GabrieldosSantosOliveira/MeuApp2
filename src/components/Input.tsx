import { memo, forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TextInputProps & {
  _focus?: TextInputProps['style'];
};
const { colors, fontSize, fonts, size } = Theme;

const InputBase: ForwardRefRenderFunction<TextInput, Props> = (
  { style, _focus, ...props },
  ref,
) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      style={[styles.input, style, isFocus ? _focus : {}]}
      placeholderTextColor={colors.inputPlaceholder}
      ref={ref}
      {...props}
    />
  );
};

export const Input = memo(forwardRef(InputBase));

const styles = StyleSheet.create({
  input: {
    height: size[52],
    borderRadius: 8,
    borderColor: colors.inputBorder,
    borderWidth: 1,
    backgroundColor: '#F4F4F5',
    paddingHorizontal: 10,
    width: '100%',
    fontFamily: fonts.Lexend[600],
    fontSize: fontSize[14],
  },
});
