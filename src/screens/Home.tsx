import { FC, useState } from 'react';
import { Alert, Modal, Text, View } from 'react-native';

import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Result } from '../components/Result';
import { Theme } from '../styles/Theme';

export const Home: FC = () => {
  const { colors, fontSize, fonts } = Theme;
  const [numberOne, setNumberOne] = useState<string>('');
  const [numberTwo, setNumberTwo] = useState<string>('');
  const [numberThree, setNumberThree] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const LineEmpty = () => (
    <View
      style={{
        height: 2,
        width: 40,
        backgroundColor: colors.black,
      }}
    />
  );
  const handleCalculate = () => {
    if (isNaN(Number(numberOne))) {
      return Alert.alert('Informe um número valido no primeiro campo');
    }
    if (isNaN(Number(numberTwo))) {
      return Alert.alert('Informe um número valido  no segundo campo');
    }
    if (isNaN(Number(numberThree))) {
      return Alert.alert('Informe um número valido  no terceiro campo');
    }
    if (isNaN((Number(numberTwo) * Number(numberThree)) / Number(numberOne))) {
      return Alert.alert('Confira se todos  os campos contém números');
    }
    setIsModalOpen(true);
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.background,
        paddingVertical: 20,
      }}
    >
      <View style={{ flex: 1, paddingTop: 30, gap: 30 }}>
        <Text
          style={{
            fontFamily: fonts.Lexend[700],
            fontSize: fontSize[24],
            textAlign: 'center',
          }}
        >
          Rule Of Three
        </Text>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Input
            style={{ flex: 1, textAlign: 'center' }}
            _focus={{ borderWidth: 2 }}
            placeholder="9"
            onChangeText={setNumberOne}
            value={numberOne}
          />
          <LineEmpty />
          <Input
            style={{ flex: 1, textAlign: 'center' }}
            _focus={{ borderWidth: 2 }}
            placeholder="9"
            onChangeText={setNumberTwo}
            value={numberTwo}
          />
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Input
            style={{ flex: 1, textAlign: 'center' }}
            _focus={{ borderWidth: 2 }}
            placeholder="9"
            onChangeText={setNumberThree}
            value={numberThree}
            onSubmitEditing={handleCalculate}
          />
          <LineEmpty />
          <Input
            style={{ flex: 1, textAlign: 'center' }}
            _focus={{ borderWidth: 2 }}
            placeholder="X"
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
      </View>
      <Button text="Calcular" onPress={handleCalculate} />
      <Modal visible={isModalOpen} transparent>
        <Result
          text={`O resultado é igual a  ${
            (Number(numberTwo) * Number(numberThree)) / Number(numberOne)
          }`}
          handleClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </View>
  );
};
