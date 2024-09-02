import React from "react";
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from "@react-navigation/elements";

export default function MainAppbar({ route, options, navigation, back }) {
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header mode="center-aligned" elevated={true}>
      <Appbar.Content title={title} />
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : (
        <Appbar.Action
          icon="arrow-right"
          size={26}
          onPress={() => navigation.navigate("Second")}
        />
      )}
    </Appbar.Header>
  );
}
