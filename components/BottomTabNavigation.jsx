import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CartScreen, ProductDetails, SearchScreen, ProfileScreen, HomeScreen } from '../screens'
import Ionicons from '@expo/vector-icons/Ionicons'
import { COLORS } from '../constants'


const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    const tabBarOptions = {
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            height: 70,
        },
    }
    return (
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),

                }}
            />
            <Tab.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'car' : 'car-outline'}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'search' : 'search-outline'}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'cart' : 'cart-outline'}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'person' : 'person-outline'}
                            size={24}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    ),

                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation