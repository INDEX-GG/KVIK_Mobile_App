import React, { FC } from 'react';
import { View, Modal, ModalProps, TouchableOpacity } from 'react-native';
import { useModalFullUIStyles } from './style';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import ButtonUI from '../ButtonUI/ButtonUI';

interface IModalFullUI {
  modalProps: ModalProps;
  onClose: () => void;
  children: React.ReactChildren | React.ReactNode;
  textButton?: string;
  visibleButton?: boolean;
  visibleDefaultContainer?: boolean;
}

const ModalFullUI: FC<IModalFullUI> = ({
  modalProps,
  textButton = '',
  visibleButton,
  onClose,
  children,
  visibleDefaultContainer = true,
}) => {
  const styles = useModalFullUIStyles();

  return (
    <Modal {...modalProps}>
      {visibleDefaultContainer ? (
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={onClose} style={styles.buttonContainer}>
              <UbuntuTextUI
                fontWeight={400}
                textProps={{ style: styles.cancelText }}
              >
                Отмена
              </UbuntuTextUI>
            </TouchableOpacity>
            {children}
          </View>
          {visibleButton && (
            <View style={styles.bottomButtonContainer}>
              <ButtonUI text={textButton} />
            </View>
          )}
        </View>
      ) : children}
    </Modal>
  );
};

export default React.memo(ModalFullUI);
