/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabHomeScreen from '../screens/TabHomeScreen';
import TabAppDownloadScreen from '../screens/TabAppDownloadScreen';
import TabCoronaScreen from '../screens/TabCoronaScreen';
import TabReservationScreen from '../screens/TabReservationScreen';
import TabKioskScreen from '../screens/TabKioskScreen';
import { BottomTabParamList, TabHomeParamList, TabAppDownloadParamList, TabCoronaParamList, TabKioskParamList, TabReservationParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="홈"
        component={TabHomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="키오스크"
        component={TabKioskNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="코로나"
        component={TabCoronaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="예약"
        component={TabReservationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="앱 다운로드"
        component={TabAppDownloadNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabHomeStack = createStackNavigator<TabHomeParamList>();
const TabAppDownloadStack = createStackNavigator<TabAppDownloadParamList>();
const TabReservationStack = createStackNavigator<TabReservationParamList>();
const TabKioskStack = createStackNavigator<TabKioskParamList>();
const TabCoronaStack = createStackNavigator<TabCoronaParamList>();

function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator>
      <TabHomeStack.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={{ headerTitle: 'Home' }}
      />
    </TabHomeStack.Navigator>
  );
}

function TabAppDownloadNavigator() {
  return (
    <TabAppDownloadStack.Navigator>
      <TabAppDownloadStack.Screen
        name="TabAppDownloadScreen"
        component={TabAppDownloadScreen}
        options={{ headerTitle: 'Tab AppDownload Title' }}
      />
    </TabAppDownloadStack.Navigator>
  );
}

function TabReservationNavigator() {
  return (
    <TabReservationStack.Navigator>
      <TabReservationStack.Screen
        name="TabReservationScreen"
        component={TabReservationScreen}
        options={{ headerTitle: 'Tab Reservation Title' }}
      />
    </TabReservationStack.Navigator>
  );
}

function TabKioskNavigator() {
  return (
    <TabKioskStack.Navigator>
      <TabKioskStack.Screen
        name="TabKioskScreen"
        component={TabKioskScreen}
        options={{ headerTitle: 'Tab Kiosk Title' }}
      />
    </TabKioskStack.Navigator>
  );
}

function TabCoronaNavigator() {
  return (
    <TabCoronaStack.Navigator>
      <TabCoronaStack.Screen
        name="TabCoronaScreen"
        component={TabCoronaScreen}
        options={{ headerTitle: 'Tab Corona Title' }}
      />
    </TabCoronaStack.Navigator>
  );
}
