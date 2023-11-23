import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

type FacebookContainerType = {
  imageDimensions?: ImageSourcePropType;
  socialMediaIcon?: string;
  carPriceCarBrand?: string;
  imageDimensionsId?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FacebookContainer = ({
  imageDimensions,
  socialMediaIcon,
  carPriceCarBrand,
  imageDimensionsId,
  propTop,
}: FacebookContainerType) => {
  const facebookStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.facebook, facebookStyle]}>
      <View style={[styles.facebookChild, styles.facebookPosition]} />
      <Image
        style={[styles.facebookItem, styles.facebookPosition]}
        contentFit="cover"
        source={imageDimensions}
      />
      <Text style={[styles.facebook1, styles.textFlexBox]}>
        {socialMediaIcon}
      </Text>
      <Text style={[styles.text, styles.textFlexBox]}>{carPriceCarBrand}</Text>
      <Image
        style={styles.moreHorizontalIcon}
        contentFit="cover"
        source={imageDimensionsId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  facebookPosition: {
    top: 0,
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
  facebookChild: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGray_100,
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    height: 169,
  },
  facebookItem: {
    borderTopLeftRadius: Border.br_5xs,
    borderTopRightRadius: Border.br_5xs,
    height: 120,
  },
  facebook1: {
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
  facebook: {
    top: 189,
    height: 169,
    width: 183,
    left: 0,
    position: "absolute",
  },
});

export default FacebookContainer;
