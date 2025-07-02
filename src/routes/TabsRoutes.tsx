import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "@/screens/Home";
import { Product } from "@/screens/Product";

export type TabRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type TabRoutesProps<T extends keyof TabRoutesList> =
  BottomTabScreenProps<TabRoutesList, T>;

const Tab = createBottomTabNavigator<TabRoutesList>();

export function TabsRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2C46B1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
