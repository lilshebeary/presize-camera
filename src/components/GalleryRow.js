import React from "react";
import { View, StyleSheet } from "react-native";
import Photo from "./Photo";

// sets row to 3 pictures keeps space with a placeholder until filled
const GalleryRow = ({ row }) => {
  console.log(row);
  const placeholders = [];
  for (let i = 0; i < 3; i++) {
    if (i >= row.length) {
      placeholders.push(null);
    }
  }
  // returns photos in row
  return (
    <View style={styles.container}>
      <View style={styles.rowStyle}>
        {row.map((photo) => (
          <Photo
            uri={photo.uri}
            key={photo.id}
            id={photo.id}
            ratio={photo.ratio}
          />
        ))}

        {placeholders.map((photo, i) => (
          <Photo placeholder={true} key={i} />
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
