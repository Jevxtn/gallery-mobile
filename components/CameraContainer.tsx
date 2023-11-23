import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type CameraContainerType = {
  imageDimensions?: ImageSourcePropType;
  imageDimensionsText?: ImageSourcePropType;
  appIcon?: string;
  numericValue?: string;
  imageDimensionsText2?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CameraContainer = ({
  imageDimensions,
  imageDimensionsText,
  appIcon,
  numericValue,
  imageDimensionsText2,
  propTop,
}: CameraContainerType) => {
  const cameraStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.camera, cameraStyle]}>
      <View style={[styles.cameraChild, styles.cameraShadowBox]} />
      <View style={[styles.cameraItem, styles.cameraShadowBox]} />
      <Image
        style={styles.cameraInner}
        contentFit="cover"
        source={imageDimensions}
      />
      <Image
        style={styles.cameraInner}
        contentFit="cover"
        source={imageDimensionsText}
      />
      <Text style={[styles.camera1, styles.textFlexBox]}>{appIcon}</Text>
      <Text style={[styles.text, styles.textFlexBox]}>{numericValue}</Text>
      <Image
        style={styles.moreHorizontalIcon}
        contentFit="cover"
        source={imageDimensionsText2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cameraShadowBox: {
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    borderRadius: Border.br_5xs,
    top: 0,
    height: 169,
    width: 183,
    left: 0,
    position: "absolute",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 10,
    position: "absolute",
  },
  cameraChild: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  cameraItem: {
    backgroundColor: Color.colorGray_100,
  },
  cameraInner: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 120,
    top: 0,
    width: 183,
    left: 0,
    position: "absolute",
  },
  camera1: {
    top: 123,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.nunitoMedium,
    color: Color.colorGray_200,
    width: 88,
    height: 21,
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
  },
  moreHorizontalIcon: {
    top: 10,
    right: 10,
    borderRadius: 3,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  camera: {
    top: 379,
    height: 169,
    width: 183,
    left: 0,
    position: "absolute",
  },
});

export default CameraContainer;
