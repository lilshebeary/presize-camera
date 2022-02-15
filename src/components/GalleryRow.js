import React from "react";
import { View, StyleSheet } from "react-native";
import Photo from "./Photo";

const GalleryRow = ({ row }) => {
  const placeholders = [];
  for (let i = 0; i < 3; i++) {
    if (i >= row.length) {
      placeholders.push(null);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        {row.map((photo) => (
          <Photo uri={photo.uri} key={photo.id} />
        ))}

        {placeholders.map((photo) => (
          <Photo placeholder={true} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowStyle: {
    flexDirection: "row",
    flex: 6,
    flexGrow: 6,
  },
});

export default GalleryRow;
