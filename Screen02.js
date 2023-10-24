import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Screen02({}) {
  const navigation = useNavigation();

  const [imageSource, setImageSource] = useState(
    require("./assets/vs_blue.png")
  );

  const imageMap = {
    blue: require("./assets/vs_blue.png"),
    red: require("./assets/vs_red.png"),
    black: require("./assets/vs_black.png"),
    silver: require("./assets/vs_silver.png"),
  };

  const handlePress1 = () => {
    setImageSource(imageMap.black);
  };
  const handlePress2 = () => {
    setImageSource(imageMap.blue);
  };
  const handlePress3 = () => {
    setImageSource(imageMap.red);
  };
  const handlePress4 = () => {
    setImageSource(imageMap.silver);
  };
  const handlePress5 = () => {
    navigation.navigate("Screen01", { selectedImageSource: imageSource });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={imageSource} style={styles.imagevs} />
        <Text style={styles.text1}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>

      <View style={styles.body2}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <TouchableOpacity onPress={handlePress1} style={styles.buttonContainer}>
          <Text
            style={[styles.btnchonmau, { backgroundColor: "black" }]}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress2} style={styles.buttonContainer}>
          <Text
            style={[styles.btnchonmau, { backgroundColor: "#0066FF" }]}
          ></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress3} style={styles.buttonContainer}>
          <Text style={[styles.btnchonmau, { backgroundColor: "red" }]}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress4} style={styles.buttonContainer}>
          <Text
            style={[styles.btnchonmau, { backgroundColor: "#FFFFCC" }]}
          ></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body3}>
        <TouchableOpacity onPress={handlePress5}>
          <Text style={[styles.btnxong, { backgroundColor: "#0033CC" }]}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  body: {
    flex: 2,
    flexDirection: "row",
  },
  body2: {
    flex: 6,
    backgroundColor: "#CCCCCC",
    width: "100%",
  },
  body3: {
    flex: 1,
    backgroundColor: "#CCCCCC",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "left",
  },
  imagevs: {
    width: 100,
    height: 120,
  },
  btnchonmau: {
    borderRadius: 5,
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: "black",
  },
  btnxong: {
    borderRadius: 5,
    borderWidth: 2,
    width: 300,
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 50,
    color: "#ffffff",
  },
  buttonContainer: {
    margin: 2,
    alignItems: "center",
  },
});

export default Screen02;
