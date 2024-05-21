import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationScreen from './NavigationScreen';

const Tabs = createBottomTabNavigator();

const StackNavA = createNativeStackNavigator();
const StackNavB = createNativeStackNavigator();
const StackNavC = createNativeStackNavigator();

const StackA = () => {
  return (
    <StackNavA.Navigator>
      <StackNavA.Screen name="ScreenA1">{() => <NavigationScreen />}</StackNavA.Screen>
    </StackNavA.Navigator>
  );
};

const StackB = () => {
  return (
    <StackNavB.Navigator>
      <StackNavB.Screen name="ScreenB1">{() => <NavigationScreen />}</StackNavB.Screen>
    </StackNavB.Navigator>
  );
};

const StackC = () => {
  return (
    <StackNavC.Navigator>
      <StackNavC.Screen name="ScreenC1">{() => <NavigationScreen />}</StackNavC.Screen>
    </StackNavC.Navigator>
  );
};

const TabNav = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="TabA" component={StackA} />
      <Tabs.Screen name="TabB" component={StackB} />
      <Tabs.Screen name="TabC" component={StackC} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <TabNav />
    </NavigationContainer>
  );
}
