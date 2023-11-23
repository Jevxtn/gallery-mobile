import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FacebookContainer from "./FacebookContainer";
import CameraContainer from "./CameraContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.frame, styles.frameLayout]}>
      <View style={[styles.recentlyDeletedParent, styles.recentlyLayout]}>
        <View style={[styles.recentlyDeleted, styles.framePosition]}>
          <View style={styles.recentlyDeletedChild} />
          <View style={styles.frame2ShadowBox} />
          <View style={styles.rectangleViewPosition} />
          <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
          <Text style={[styles.recentlyDeleted1, styles.downloads1Typo]}>
            Recently Deleted
          </Text>
          <Text style={styles.text}>4</Text>
        </View>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={[styles.cards, styles.framePosition]}>
        <View style={[styles.frame1, styles.framePosition]}>
          <FacebookContainer
            imageDimensions={require("../assets/rectangle-4.png")}
            socialMediaIcon="Facebook"
            carPriceCarBrand="12"
            imageDimensionsId={require("../assets/more-horizontal.png")}
          />
          <CameraContainer
            imageDimensions={require("../assets/rectangle-41.png")}
            imageDimensionsText={require("../assets/rectangle-5.png")}
            appIcon="Camera"
            numericValue="12"
            imageDimensionsText2={require("../assets/more-horizontal1.png")}
          />
          <View style={[styles.recentlyDeleted, styles.framePosition]}>
            <View style={[styles.frame2, styles.frame2ShadowBox]} />
            <View style={[styles.frame3, styles.framePosition]}>
              <Image
                style={styles.rectangleViewPosition}
                contentFit="cover"
                source={require("../assets/rectangle-42.png")}
              />
            </View>
            <View style={[styles.frame4, styles.frame4Layout]}>
              <Text style={[styles.downloads1, styles.frame4Layout]}>
                Downloads
              </Text>
            </View>
            <Text style={styles.text}>78</Text>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
          </View>
        </View>
        <View style={styles.frame5}>
          <FacebookContainer
            imageDimensions={require("../assets/rectangle-41.png")}
            socialMediaIcon="Instagram"
            carPriceCarBrand="8"
            imageDimensionsId={require("../assets/more-horizontal1.png")}
            propTop={0}
          />
          <CameraContainer
            imageDimensions={require("../assets/rectangle-43.png")}
            imageDimensionsText={require("../assets/rectangle-51.png")}
            appIcon="One Drive"
            numericValue="872"
            imageDimensionsText2={require("../assets/more-horizontal.png")}
            propTop={189}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 548,
    width: 380,
    position: "absolute",
  },
  recentlyLayout: {
    height: 169,
    width: 183,
    position: "absolute",
  },
  framePosition: {
    left: 0,
    top: 0,
  },
  rectangleViewPosition: {
    height: 120,
    borderTopRightRadius: Border.br_5xs,
    borderTopLeftRadius: Border.br_5xs,
    left: 0,
    top: 0,
    width: 183,
    position: "absolute",
  },
  downloads1Typo: {
    height: 21,
    color: Color.colorGray_200,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  frame2ShadowBox: {
    backgroundColor: Color.colorGray_100,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 169,
    width: 183,
    position: "absolute",
  },
  frame4Layout: {
    width: 88,
    position: "absolute",
  },
  recentlyDeletedChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 169,
    width: 183,
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro,
  },
  recentlyDeleted1: {
    width: 110,
    left: 10,
    top: 123,
    position: "absolute",
  },
  text: {
    top: 144,
    fontSize: FontSize.size_smi,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
    color: Color.colorDimgray,
    width: 51,
    height: 25,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 10,
    position: "absolute",
  },
  recentlyDeleted: {
    height: 169,
    width: 183,
    position: "absolute",
  },
  vectorIcon: {
    height: "14.18%",
    width: "13.11%",
    top: "28.35%",
    right: "43.72%",
    bottom: "57.47%",
    left: "43.17%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  recentlyDeletedParent: {
    top: 379,
    left: 197,
    height: 169,
  },
  frame2: {
    overflow: "hidden",
  },
  frame3: {
    height: 169,
    width: 183,
    position: "absolute",
    overflow: "hidden",
  },
  downloads1: {
    height: 21,
    color: Color.colorGray_200,
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 0,
    top: 0,
  },
  frame4: {
    height: 46,
    left: 10,
    top: 123,
    overflow: "hidden",
  },
  frameIcon: {
    top: 10,
    left: 149,
    width: 24,
    height: 159,
    overflow: "hidden",
    position: "absolute",
  },
  frame1: {
    width: 183,
    left: 0,
    overflow: "hidden",
    height: 548,
    position: "absolute",
  },
  frame5: {
    height: 359,
    top: 0,
    width: 183,
    left: 197,
    overflow: "hidden",
    position: "absolute",
  },
  cards: {
    height: 548,
    width: 380,
    position: "absolute",
  },
  frame: {
    top: 131,
    left: 24,
    overflow: "hidden",
  },
});

export default FormContainer;
