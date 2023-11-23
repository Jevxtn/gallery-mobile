import * as React from "react";
import { StyleSheet, View } from "react-native";
import PhotoFormContainer from "../components/PhotoFormContainer";
import AlbumForm from "../components/AlbumForm";
import FormContainer from "../components/FormContainer";

const Gallery = () => {
  return (
    <View style={styles.gallery}>
      <PhotoFormContainer />
      <View style={styles.frame}>
        <AlbumForm />
        <FormContainer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 428,
    height: 679,
    overflow: "hidden",
  },
  gallery: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Gallery;
