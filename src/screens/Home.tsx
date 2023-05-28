import { FC, useState } from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ModalRuleOfThreeShowResult } from '../components/ModalRuleOfThreeShowResult';
import { Theme } from '../styles/Theme';
import { LineEmpty } from '../components/LineEmpty';
import { ServiceRuleOfThree } from '../services/ServiceRuleOfThree';
const { colors, fontSize, fonts } = Theme;
export const Home: FC = () => {
  const [numberOne, setNumberOne] = useState<string>('');
  const [numberTwo, setNumberTwo] = useState<string>('');
  const [numberThree, setNumberThree] = useState<string>('');
  const [resultRuleOfThree, setResultRuleOfThree] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const serviceRuleOfThree = new ServiceRuleOfThree();
  const handleCalculateRuleOfThree = () => {
    try {
      const result = serviceRuleOfThree.calculate({
        numberOne,
        numberThree,
        numberTwo,
      });
      setResultRuleOfThree(result);
      setIsModalOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text role="heading" style={styles.heading}>
          Rule Of Three
        </Text>

        <View style={styles.boxInput}>
          <Input
            style={styles.input}
            _focus={styles.inputFocus}
            placeholder="9"
            onChangeText={setNumberOne}
            value={numberOne}
            keyboardType='number-pad'
          />
          <LineEmpty />
          <Input
            style={styles.input}
            _focus={styles.inputFocus}
            placeholder="9"
            onChangeText={setNumberTwo}
            value={numberTwo}
            keyboardType='number-pad'
          />
        </View>
        <View style={styles.boxInput}>
          <Input
            style={styles.input}
            _focus={styles.inputFocus}
            placeholder="9"
            onChangeText={setNumberThree}
            value={numberThree}
            onSubmitEditing={handleCalculateRuleOfThree}
            keyboardType='number-pad'
          />
          <LineEmpty />
          <Input
            style={styles.input}
            _focus={styles.inputFocus}
            placeholder="X"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
      </View>
      <Button text="Calcular" onPress={handleCalculateRuleOfThree} />
      <ModalRuleOfThreeShowResult
        isModalOpen={isModalOpen}
        text={`O resultado é igual a  ${resultRuleOfThree}`}
        handleClose={() => setIsModalOpen(false)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
  inputFocus: {
    borderWidth: 2,
  },
  input: {
    flex: 1,
    textAlign: 'center',
  },
  boxInput: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  heading: {
    fontFamily: fonts.Lexend[700],
    fontSize: fontSize[24],
    textAlign: 'center',
  },
  main: { flex: 1, paddingTop: 30, gap: 30 },
});
