import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}> 
        This is the <Text style={{fontWeight: "bold", fontStyle: "italic", fontSize: 25}}>second</Text> screen. 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 20,
    marginBottom: 100,
  },
});
