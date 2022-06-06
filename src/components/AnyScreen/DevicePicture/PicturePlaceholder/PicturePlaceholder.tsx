import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { usePicturePlaceholderStyles } from './style';
import UbuntuTextUI from '../../../../UI/UbuntuTextUI/UbuntuTextUI';

const PicturePlaceholder = () => {
  const styles = usePicturePlaceholderStyles();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <UbuntuTextUI fontWeight={400} textProps={{ style: styles.text }}>
          Вы ограничили доступ к{'\n'} вашей галерее, вы можете{'\n'} разрешить
          доступ в
        </UbuntuTextUI>
        <TouchableOpacity onPress={Linking.openSettings}>
          <UbuntuTextUI
            fontWeight={400}
            textProps={{ style: styles.settingsLink }}
          >
            настройках
          </UbuntuTextUI>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default React.memo(PicturePlaceholder);
