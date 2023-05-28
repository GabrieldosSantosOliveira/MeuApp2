import LottieView from 'lottie-react-native';
import { FC } from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Theme } from '../styles/Theme';
import Teacher from './../animations/Teacher.json';
import { Button } from './Button';
type ModalRuleOfThreeShowResultProps = {
  handleClose: () => void;
  text: string;
  isModalOpen: boolean;
};
const { colors, fontSize, fonts } = Theme;
export const ModalRuleOfThreeShowResult: FC<
  ModalRuleOfThreeShowResultProps
> = ({ handleClose, text, isModalOpen }) => {
  return (
    <Modal visible={isModalOpen} transparent>
      <SafeAreaView style={styles.container}>
        <View style={styles.modal}>
          <View style={styles.containerModal}>
            <LottieView
              source={Teacher}
              style={styles.animation}
              autoPlay
              loop
              resizeMode="contain"
            />
            <View style={styles.box}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </View>
          <Button
            text="Continuar"
            type="SECONDARY"
            style={styles.button}
            onPress={handleClose}
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  modal: {
    width: '80%',
    height: 200,
    backgroundColor: colors.inputBackground,
    borderRadius: 12,
  },
  containerModal: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  animation: {
    position: 'relative',
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: fontSize[14],
    fontFamily: fonts.Lexend[600],
    paddingHorizontal: 10,
  },
  button: {
    borderTopWidth: 1,
    borderColor: colors.black,
  },
});
