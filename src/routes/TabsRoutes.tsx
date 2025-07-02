import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

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
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="product" component={Product} />
    </Tab.Navigator>
  );
}
