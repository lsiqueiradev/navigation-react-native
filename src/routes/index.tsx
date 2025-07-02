import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./TabsRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabsRoutes />
    </NavigationContainer>
  );
}
