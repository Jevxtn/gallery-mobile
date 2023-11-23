import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

type DarkModeOffImageType = {
  dimensionCode?: ImageSourcePropType;
};

const DarkModeOffImage = ({ dimensionCode }: DarkModeOffImageType) => {
  return (
    <Image
      style={styles.darkModeoffIcon}
      contentFit="cover"
      source={dimensionCode}
    />
  );
};

const styles = StyleSheet.create({
  darkModeoffIcon: {
    width: 78,
    height: 13,
  },
});

export default DarkModeOffImage;
