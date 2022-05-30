import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid, Platform, Image} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import ImageUI from "../../UI/ImageUI/ImageUI";
import FastImage from 'react-native-fast-image'
import RNFS from 'react-native-fs';

const RNCamera = () => {
  const [test, setTest] = useState<any>([]);
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  useEffect(() => {
    CameraRoll.getPhotos({ assetType: 'Photos', first: 100 }).then((r) =>
      setTest(r.edges)
    );
  }, []);
  console.log(RNFS.DocumentDirectoryPath);
  hasAndroidPermission();

  return (
    <View>
      {test.map(item => {
        if (item.node.group_name !== 'Camera') return null;
        const uri = item.node.image.uri;
        console.log('file://' + RNFS.DocumentDirectoryPath + `/${uri}`, 1);
        return (
          <FastImage
            style={{ width: 100, height: 100 }}
            source={{ uri: uri }}
          />
        )
      })}
      <Text>12</Text>
    </View>
  );
};

export default React.memo(RNCamera);
