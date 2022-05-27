import React from 'react';
import { View, Text } from 'react-native';
import { usePlaceOfferDefaultFieldsStyles} from "../style";

const PlaceOfferTitle = () => {
  const styles = usePlaceOfferDefaultFieldsStyles();

  return (
    <View style={styles.defaultFields}>
      <Text>1</Text>
    </View>
  );
};

export default React.memo(PlaceOfferTitle);
