import React, { FC, useMemo } from 'react';
import { useSecret } from '../../../hooks/useSecret';
import Swiper from 'react-native-swiper';
import SliderSlide from './SwiperSlide/SwiperSlide';
import { useDevice } from '../../../hooks/useDevice';
import { useCustomSwiperStyles } from './style';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-elements';

interface ICustomSwiperProps {
  photos: string[];
  isCardPagination?: boolean;
  remainingPhotosCount?: number;
  visibleLastSlide?: boolean;
  onPressSlide?: () => void;
}

const CustomSwiper: FC<ICustomSwiperProps> = ({
  photos,
  remainingPhotosCount,
  isCardPagination = false,
  visibleLastSlide,
  onPressSlide,
}) => {
  const styles = useCustomSwiperStyles();
  const isPhotos = useMemo(() => photos?.length, [photos]);

  const { uniqueKeyMap } = useSecret();
  const { isIos } = useDevice();

  const renderPagination = (index: number, total: number) => {
    return (
        <View style={styles.paginationNumber}>
          <Text style={{ color: '#fff' }}>
            <Text style={{ color: '#fff' }}>{index + 1}</Text>/{total}
          </Text>
        </View>
    )
  }

  const typePagination = !isCardPagination ?
    {
        dotStyle: styles.dot,
        activeDotStyle: styles.active,
        paginationStyle: styles.pagination,
    } : {
        renderPagination: renderPagination
    };

  return (
    <>
      <Swiper
        loop={false}
        index={0}
        showsButtons={false}
        loadMinimal={true}
        bounces={isIos}
        {...typePagination}
      >
        {isPhotos
          ? photos.map((photo, index) => (
              <Pressable key={uniqueKeyMap(photo)} onPress={onPressSlide}>
                <SliderSlide
                  photo={photo}
                  slideIndex={index}
                  lastSlideIndex={photos.length}
                  remainingPhotosCount={remainingPhotosCount}
                  visibleLastSlide={visibleLastSlide}
                />
              </Pressable>
            ))
          : null}
      </Swiper>
    </>
  );
};

export default React.memo(CustomSwiper);
