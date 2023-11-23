import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PhotoFormContainer = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={[styles.albumsParent, styles.parentPosition]}>
          <Text style={[styles.albums, styles.albumsTypo]}>Albums</Text>
          <Image
            style={[styles.ionalbumsIcon, styles.ionalbumsIconLayout]}
            contentFit="cover"
            source={require("../assets/ionalbums.png")}
          />
        </View>
        <View
          style={[styles.arcticonshuaweiPhotosParent, styles.parentPosition]}
        >
          <Image
            style={[styles.arcticonshuaweiPhotos, styles.ionalbumsIconLayout]}
            contentFit="cover"
            source={require("../assets/arcticonshuaweiphotos.png")}
          />
          <Text style={[styles.photos, styles.albumsTypo]}>Photos</Text>
        </View>
      </View>
      <View style={styles.homeIndicatorIphone}>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    top: 0,
    height: 39,
    position: "absolute",
  },
  albumsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunitoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_sm,
    top: 29,
    left: 0,
    position: "absolute",
  },
  ionalbumsIconLayout: {
    height: 24,
    width: 24,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  albums: {
    color: Color.colorRoyalblue,
  },
  ionalbumsIcon: {
    left: 13,
  },
  albumsParent: {
    left: 145,
    width: 50,
  },
  arcticonshuaweiPhotos: {
    left: 10,
  },
  photos: {
    color: Color.colorGray_200,
  },
  arcticonshuaweiPhotosParent: {
    width: 45,
    left: 0,
    top: 0,
  },
  frameParent: {
    top: 11,
    left: 116,
    width: 195,
    height: 39,
    position: "absolute",
  },
  homeIndicator: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.systemColoursLabelColourPrimaryLight,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicatorIphone: {
    top: 51,
    height: 34,
    width: 428,
    left: 0,
    position: "absolute",
  },
  frame: {
    top: 841,
    backgroundColor: Color.neutralBackground3Rest,
    height: 85,
    overflow: "hidden",
    width: 428,
    left: 0,
    position: "absolute",
  },
});

export default PhotoFormContainer;
