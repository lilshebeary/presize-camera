import React from "react";
import { StyleSheet, FlatList } from "react-native";
import GalleryRow from "./GalleryRow";

const renderRow = ({ item }) => {
  console.error(item);
  return <GalleryRow row={item} />;
};

const Gallery = ({ photos }) => {
  const imageList = Object.keys(photos)
    .map((id) => photos[id])
    .sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      }
      if ((a.date = b.date)) {
        return 0;
      }
      if (a.date > b.date) {
        return 1;
      }
    });

  const imageRows = [];
  let currentRow = [];
  let row = 0;
  let index = 0;

  for (const photo of imageList) {
    // console.error(photo)
    let rowIndex = (index) % 3;
  
    if (rowIndex <= 2) {
      currentRow.push(photo);
    }
    if ((rowIndex === 2)) {
      imageRows.push(currentRow);
      currentRow = [];
      row++;
    }
    index++;
  }
  
  return (
    <FlatList
      style={styles.container}
      data={imageRows}
      renderItem={renderRow}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  galleryGrid: {
    flexDirection: "row",
    flex: 6,
    flexGrow: 6,
  },
});

export default Gallery;
