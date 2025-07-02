import {
  createDrawerNavigator,
  DrawerScreenProps,
} from "@react-navigation/drawer";

import { Home } from "@/screens/Home";
import { Product } from "@/screens/Product";

export type DrawerRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type TabRoutesProps<T extends keyof DrawerRoutesList> =
  DrawerScreenProps<DrawerRoutesList, T>;

const Drawer = createDrawerNavigator<DrawerRoutesList>();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="home" component={Home} />
      <Drawer.Screen name="product" component={Product} />
    </Drawer.Navigator>
  );
}
