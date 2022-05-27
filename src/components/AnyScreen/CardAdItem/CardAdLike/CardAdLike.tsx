import React from 'react';
import { TouchableOpacity } from 'react-native';
import LikeIcon from '../../../../assets/LikeIcon.svg';
import LikeActiveIcon from '../../../../assets/LikeActionIcon.svg';
import { useCardAdLikeStyles } from './style';


type CardAdLikeProps = {
    isActive: boolean,
}

const CardAdLike = ({isActive}: CardAdLikeProps) => {
  const styles = useCardAdLikeStyles();

  return (
    <TouchableOpacity style={styles.likeIcon}>
      {
          isActive
          ? <LikeActiveIcon />
          : <LikeIcon style={styles.likeIconSvg as {}}/>
      }
    </TouchableOpacity>
  );
};

export default React.memo(CardAdLike);
