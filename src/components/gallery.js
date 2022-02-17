import React from "react";
import { StyleSheet, FlatList } from "react-native";
import GalleryRow from "./GalleryRow";

const renderRow = ({ item }) => {
  // console.error(item);
  return <GalleryRow row={item} />;
};

const Gallery = ({ photos }) => {
  // orders photos by date taken so that they are ordered last, I may change so the first goes to the top
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
    }).reverse();

  const imageRows = [];
  let currentRow = [];
  let row = 0;
  let index = 0;

  // puts 3 photos per row

  for (const photo of imageList) {
    // console.error(photo);
    let rowIndex = index % 3;

    if (rowIndex <= 2) {
      currentRow.push(photo);
    }
    if (rowIndex === 2) {
      imageRows.push(currentRow);
      currentRow = [];
      row++;
    }
    index++;
  }
  // makes sure that less than one photo can be in a row
  if (currentRow.length > 0) {
    imageRows.push(currentRow);
  }
  // render photo gallery on the screen
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
