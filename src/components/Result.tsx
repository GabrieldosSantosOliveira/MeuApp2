import LottieView from 'lottie-react-native';
import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from '../styles/Theme';
import Teacher from './../animations/Teacher.json';
type Props = {
  handleClose: () => void;
  text: string;
};
export const Result: FC<Props> = ({ handleClose, text }) => {
  const { colors, fontSize, fonts, size } = Theme;
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View
        style={{
          width: '80%',
          height: 200,
          backgroundColor: colors.inputBackground,
          borderRadius: 12,
        }}
      >
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <LottieView
            source={Teacher}
            style={{
              position: 'relative',
              flex: 1,
            }}
            autoPlay
            loop
            resizeMode="contain"
          />
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: fontSize[14],
                fontFamily: fonts.Lexend[600],
                paddingHorizontal: 10,
              }}
            >
              {text}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            height: size[52],
            borderTopWidth: 1,
            borderColor: colors.black,
          }}
          onPress={handleClose}
        >
          <Text
            style={{
              fontFamily: fonts.Lexend[600],
              fontSize: fontSize[14],
            }}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
