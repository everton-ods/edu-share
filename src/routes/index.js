
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/Cadastro';
import HomeScreen1 from '../pages/Login';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={HomeScreen1} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default Routes;