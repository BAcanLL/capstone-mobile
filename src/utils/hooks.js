import {
  Asap_400Regular,
  Asap_400Regular_Italic,
  Asap_500Medium,
  Asap_500Medium_Italic,
  Asap_600SemiBold,
  Asap_600SemiBold_Italic,
  Asap_700Bold,
  Asap_700Bold_Italic,
  useFonts,
} from '@expo-google-fonts/asap';

export const useCustomFonts = () => {
  let [fontsLoaded] = useFonts({
    'Asap-Regular': Asap_400Regular,
    'Asap-Regular-Italic': Asap_400Regular_Italic,
    'Asap-Medium': Asap_500Medium,
    'Asap-Medium-Italic': Asap_500Medium_Italic,
    'Asap-SemiBold': Asap_600SemiBold,
    'Asap-SemiBold-Italic': Asap_600SemiBold_Italic,
    'Asap-Bold': Asap_700Bold,
    'Asap-Bold-Italic': Asap_700Bold_Italic,
  });

  return [fontsLoaded];
};
