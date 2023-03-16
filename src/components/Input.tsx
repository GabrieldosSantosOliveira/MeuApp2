import { memo, forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Theme } from '../styles/Theme';
type Props = TextInputProps & {
  _focus?: TextInputProps['style'];
};
const InputBase: ForwardRefRenderFunction<TextInput, Props> = (
  { style, _focus, ...props },
  ref,
) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const { size, colors, fonts, fontSize } = Theme;
  return (
    <TextInput
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      style={[
        {
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
        style,
        isFocus ? _focus : {},
      ]}
      placeholderTextColor={colors.inputPlaceholder}
      ref={ref}
      {...props}
    />
  );
};
export const Input = memo(forwardRef(InputBase));
