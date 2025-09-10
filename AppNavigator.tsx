import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHeader from '@/components/CustomHeader';

import HomeScreen from '@/app/(tabs)/index';
import AboutScreen from '@/app/(tabs)/about';
import CoursesScreen from '@/app/(tabs)/courses';
import EventsScreen from '@/app/(tabs)/events';
import TestimonialsScreen from '@/app/(tabs)/testimonials';
import ContactScreen from '@/app/(tabs)/contact';
import CalculatorScreen from '@/app/(tabs)/calculator';
// If you have a Donate screen, import it here, otherwise leave as placeholder
const DonateScreen = () => <></>;

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: () => <CustomHeader />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="Testimonials" component={TestimonialsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
