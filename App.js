import 'react-native-gesture-handler';

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import CreateAccount from "./src/screens/CreateAccount";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Create: CreateAccount
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: false
    },
  }
);

export default createAppContainer(navigator);
