import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  },

  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "",
    },
  }
);

export default createAppContainer(navigator);
