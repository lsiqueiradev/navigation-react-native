import { View } from "react-native";

import { DrawerRoutesProps } from "@/routes/DrawerRoutes";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";

export function Home({ navigation }: DrawerRoutesProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "31" })}
        />
      </Header>
    </View>
  );
}
