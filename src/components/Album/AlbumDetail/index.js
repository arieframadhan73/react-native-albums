import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../../Button';

const AlbumDetail = ({album}) => {
  const {
    contentStyle,
    thumbnailStyle,
    imageHeader,
    imageContent,
    textFont,
  } = styles;
  const {title, artist, thumbnail_image, image, url} = album;
  return (
    <Card>
      <CardSection>
        <View style={imageHeader}>
          <Image style={thumbnailStyle} source={{uri: thumbnail_image}} />
        </View>

        <View style={contentStyle}>
          <Text style={textFont}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageContent} source={{uri: image}} />
      </CardSection>
      <CardSection>
        <Button text={"Don't Touch!"} onPress={() => Linking.openURL(url)} />
      </CardSection>
    </Card>
  );
};

const styles = {
  contentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    borderRadius: 5,
  },
  imageHeader: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContent: {
    width: null,
    height: 300,
    flex: 1,
  },
  textFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },
};

export default AlbumDetail;
