import {StyleSheet} from 'react-native'

export const themeColor = {
  dark: 'black',
  light: 'white',
};

const baseContainerStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center', 
};

const baseBoxStyles = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  height: 150,
  width: 200, 
};

const lightStyleSheet = StyleSheet.create({
  container:{
    ...baseContainerStyles, 
    backgroundColor: themeColor.light,
  },
  box:{
    ...baseBoxStyles, 
    borderColor: themeColor.dark,
  } 
});

const darkStyleSheet = StyleSheet.create({
  container: {
    ...baseContainerStyles,
    backgroundColor: themeColor.dark,
  },
  box: {
    ...baseBoxStyles,
    borderColor: themeColor.light,
  }
});

export default function getDarkStyleSheet(useTheme){
  
 return useTheme ? darkStyleSheet : lightStyleSheet;  

}
