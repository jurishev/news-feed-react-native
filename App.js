import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'News Feed' }} />
                <Stack.Screen name="Details" component={ArticleScreen} options={{ title: 'News Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
