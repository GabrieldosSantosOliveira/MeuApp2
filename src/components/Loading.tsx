import { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { Theme } from '../styles/Theme';
export const Loading: FC = () => {
  const { colors } = Theme;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.button} />
    </View>
  );
};
