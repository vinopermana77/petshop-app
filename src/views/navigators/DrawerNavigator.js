import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  createDrawerNavigator,
  DrawerItemList
} from "@react-navigation/drawer";
import React from "react";
import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import Colors from "../../const/color";

const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView style={{ paddingVertical: 30 }}>
        {/* Image Profile */}
      <View style={{ marginLeft: 20, marginVertical: 40 }}>
        <Image
          source={require("../../../assets/img/person.jpg")}
          style={{ height: 70, width: 70, borderRadius: 20 }}
        />
        <Text style={{color: Colors.white, fontWeight: 'bold', fontSize: 14, marginTop: 10}}>
            Vino Permana
        </Text>
      </View>

      {/* Item Lists */}
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerType: "slide",
        drawerStyle: {
          width: "70%",
          backgroundColor: Colors.primary,
        },
        // overlayColor: null,
        sceneContainerStyle: {},
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" options={{title: 'ADOPTION'}}>
        {({ props }) => <HomeScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
