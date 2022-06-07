import React, { FC, useMemo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { usePlaceOfferModalStyles } from './style';
import UbuntuTextUI from '../../../../UI/UbuntuTextUI/UbuntuTextUI';
import ArrowRight from '../../../../assets/ArrowRightIcon.svg';

interface IPlaceOfferModalProps {
  text: string;
  onToggle: () => void;
  children: React.ReactChildren | React.ReactNode;
  visibleBorderBottom?: boolean;
}

const PlaceOfferModal: FC<IPlaceOfferModalProps> = ({
  text,
  onToggle,
  visibleBorderBottom = true,
  children,
}) => {
  const styles = usePlaceOfferModalStyles();
  const styleContainer = useMemo(
    () => ({
      ...styles.container,
      borderBottomWidth: visibleBorderBottom ? 2 : 0,
    }),
    [visibleBorderBottom, styles]
  );

  return (
    <>
      <TouchableOpacity style={styleContainer} onPress={onToggle}>
        <UbuntuTextUI fontWeight={400} textProps={{ style: styles.text }}>
          {text}
        </UbuntuTextUI>
        <View style={styles.iconContainer}>
          <ArrowRight color={styles.arrowColor.color} />
        </View>
      </TouchableOpacity>
      {children}
    </>
  );
};

export default React.memo(PlaceOfferModal);
