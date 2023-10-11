import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.body1}>
        <Image source={require("./assets/vs_blue.png")} style={styles.body1} />
      </View>
      <View style={styles.body2}>
        <Text style={styles.tieude1}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style={styles.starContainer}>
          <Image source={require("./assets/sao1.png")} style={styles.star} />
          <Image source={require("./assets/sao1.png")} style={styles.star} />
          <Image source={require("./assets/sao1.png")} style={styles.star} />
          <Image source={require("./assets/sao1.png")} style={styles.star} />
          <Image source={require("./assets/sao1.png")} style={styles.star} />
          <Text style={styles.tieude2}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.tieude3}>1.790.000 đ</Text>
          <Text style={styles.tieude4}>1.790.000 đ</Text>
        </View>
        <View style={styles.refund}>
          <Text style={styles.tieude5}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image source={require("./assets/group.png")} style={styles.group} />
        </View>
      </View>
      <View style={styles.body3}>
        <Text style={styles.btnchonmau}>4 MÀU - CHỌN MÀU </Text>
        <Text style={styles.abc}></Text>
      </View>
      <View style={styles.body4}>
        <Text style={styles.btnchonmua}>Chọn mua</Text>
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
  body1: {
    flex: 4.5,
    width: 300,
  },
  body2: {
    flex: 2,
  },
  body3: {
    flex: 1.5,
  },
  body4: {
    flex: 1,
  },
  tieude1: {
    fontSize: 18,
  },
  star: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tieude2: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  price: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  tieude3: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 35,
  },
  tieude4: {
    fontSize: 17,
    fontWeight: "bold",
    textDecorationLine: "line-through",
    color: "#444444",
  },
  refund: {
    paddingTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  tieude5: {
    fontSize: 15,
    fontWeight: "bold",
    color: "red",
  },
  group: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  btn1: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  btnchonmau: {
    fontSize: 18,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    paddingTop: 15,
    width: 350,
    height:55,
    borderWidth: 2,
    borderColor: "black",
  },
  btnchonmua: {
    color: "white",
    fontSize: 20,
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "red",
    padding: 12,
    width: 350,
    
  },
});
