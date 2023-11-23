import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import DarkModeOffImage from "./DarkModeOffImage";
import { Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const AlbumForm = () => {
  return (
    <View style={styles.frame}>
      <View style={[styles.topNavBar, styles.topLayout]}>
        <View style={[styles.topNavBarChild, styles.topLayout]} />
        <View style={styles.frame1}>
          <Image
            style={[styles.materialSymbolsaddIcon, styles.materialIconLayout]}
            contentFit="cover"
            source={require("../assets/materialsymbolsadd.png")}
          />
          <Image
            style={[
              styles.materialSymbolsLightgridViIcon,
              styles.materialIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/materialsymbolslightgridviewoutline.png")}
          />
          <Text style={styles.albums}>Albums</Text>
        </View>
      </View>
      <View style={styles.statusBarIphone}>
        <View style={styles.timeIphone}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <DarkModeOffImage
          dimensionCode={require("../assets/cellularwifibattery-iphone.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topLayout: {
    height: 52,
    width: 428,
    left: 0,
    position: "absolute",
  },
  materialIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  topNavBarChild: {
    backgroundColor: Color.neutralBackground3Rest,
    top: 0,
    height: 52,
  },
  materialSymbolsaddIcon: {
    left: 0,
  },
  materialSymbolsLightgridViIcon: {
    left: 354,
  },
  albums: {
    marginLeft: -29,
    top: 7,
    left: "50%",
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    position: "absolute",
  },
  frame1: {
    top: 14,
    left: 25,
    width: 378,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  topNavBar: {
    top: 47,
  },
  time: {
    marginTop: -10.5,
    top: "50%",
    fontSize: FontSize.defaultBodyBold_size,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.defaultBodyBold,
    color: Color.systemColoursLabelColourPrimaryLight,
    textAlign: "center",
    width: 54,
    left: 0,
    position: "absolute",
  },
  timeIphone: {
    height: 21,
    width: 54,
  },
  statusBarIphone: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_sm,
    paddingRight: Padding.p_7xl,
    paddingBottom: Padding.p_xs,
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame: {
    height: 99,
    overflow: "hidden",
    width: 428,
    left: 0,
    top: 0,
    position: "absolute",
  },
});

export default AlbumForm;
