import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import HomeScreen from './HomeScreen';
import ArticleScreen from './ArticleScreen';

export default function App() {

    const Stack = createNativeStackNavigator();

    useFonts({ Oswald_400Regular });

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'News Feed' }} />
                <Stack.Screen name="Details" component={ArticleScreen} options={{ title: 'News Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
