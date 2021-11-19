import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CreateScreen from './src/screens/CreateScreen';
import CameraScreen from './src/screens/CameraScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import EditScreen from './src/screens/EditScreen';
import GalleryScreen from './src/screens/GalleryScreen';
import SnapfishScreen from './src/screens/SnapfishScreen';

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Camera"
				screenOptions={{
					headerShown: false
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Create" component={CreateScreen} />
				<Stack.Screen name="Camera" component={CameraScreen} />
				<Stack.Screen name="Photo" component={PhotoScreen} />
				<Stack.Screen name="Edit" component={EditScreen} />
				<Stack.Screen name="Gallery" component={GalleryScreen} />
				<Stack.Screen name="Snapfish" component={SnapfishScreen} />
				
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
