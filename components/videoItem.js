import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";

export default class VideoItem extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri:
              "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/28/Pictures/_17342b10-628c-11e8-b5ac-da6b7874835f.JPG"
          }}
          style={{ height: 200 }}
        />
        <View style={styles.descriptionContainer}>
          <Image
            style={styles.thumbnail}
            source={{
              uri:
                "http://prositetutorials.org/wp-content/uploads/2016/08/how-to-make-a-sweet-ass-thumbnail.png"
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={styles.videoDetails}>Hello</Text>
        </View>
        <View style={styles.sep} />

        <Image
          source={{
            uri:
              "https://media.pitchfork.com/photos/5a751d6f63853c55ce1dfa54/2:1/w_790/Wiz-Khalifa.jpg"
          }}
          style={{ height: 200 }}
        />
        <View style={styles.descriptionContainer}>
          <Image
            style={styles.thumbnail}
            source={{
              uri:
                "http://www.masala.com/sites/default/files/styles/gallery_slideshow_cache_734/public/images/2018/05/16/Veere-di-Wedding.jpg?itok=I1Q9OviI"
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={styles.videoDetails}>Hiiii</Text>
        </View>
        <View style={styles.sep} />

        <Image
          style={styles.thumbnail}
          source={{
            uri:
              "http://www.masala.com/sites/default/files/styles/gallery_slideshow_cache_734/public/images/2018/05/16/Veere-di-Wedding.jpg?itok=I1Q9OviI"
          }}
          style={{ height: 200 }}
        />
        <View style={styles.descriptionContainer}>
          <Image
            source={{
              uri:
                "https://media.pitchfork.com/photos/5a751d6f63853c55ce1dfa54/2:1/w_790/Wiz-Khalifa.jpg"
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={styles.videoDetails}>Khalifa</Text>
        </View>
        <View style={styles.sep} />

        <Image
          style={styles.thumbnail}
          source={{
            uri:
              "http://prositetutorials.org/wp-content/uploads/2016/08/how-to-make-a-sweet-ass-thumbnail.png"
          }}
          style={{ height: 200 }}
        />
        <View style={styles.descriptionContainer}>
          <Image
            source={{
              uri:
                "http://prositetutorials.org/wp-content/uploads/2016/08/how-to-make-a-sweet-ass-thumbnail.png"
            }}
            style={{ width: 50, height: 50, borderRadius: 25 }}
          />
          <Text style={styles.videoDetails}>Mia</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 15
  },
  thumbnail: {
    paddingTop: 10
  },
  sep: {
    borderTopWidth: 0.5,
    borderColor: "grey",
    paddingBottom: 15
  },
  descriptionContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 15
  },
  videoDetails: {
    fontSize: 20,
    color: "black",
    paddingHorizontal: 10
  }
});
