import React from 'react';
import {View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: [],
    };
  }

  componentDidMount() {
    this.getAlbumData();
  }

  getAlbumData() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(res => {
      const album = res.data;
      this.setState({
        album,
      });
    });
  }

  render() {
    const {album} = this.state;
    return (
      <View style={styles.scrollViewStyles}>
        <ScrollView>
          {album.map(data => (
            <AlbumDetail key={Math.random()} album={data} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  scrollViewStyles: {
    flex: 1,
  },
};
export default AlbumList;
