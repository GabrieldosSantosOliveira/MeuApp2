import {
  useFonts,
  Lexend_600SemiBold,
  Lexend_700Bold,
} from '@expo-google-fonts/lexend';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Theme } from './src/styles/Theme';
export default function App() {
  const [isFontsLoaded] = useFonts({
    Lexend_600SemiBold,
    Lexend_700Bold,
  });
  const { colors } = Theme;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.background} />
      {isFontsLoaded ? <Home /> : <Loading />}
    </SafeAreaView>
  );
}
