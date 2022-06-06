import React, { FC, useMemo } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Modal, ModalProps, TouchableOpacity } from 'react-native';
import { useModalFullUIStyles } from './style';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';
import ButtonUI from '../ButtonUI/ButtonUI';

interface IModalFullUI {
  modalProps: ModalProps;
  onClose: () => void;
  children: React.ReactChildren | React.ReactNode;
  textButton?: string;
  onPressButton?: () => void;
  visibleButton?: boolean;
  visibleDefaultContainer?: boolean;
  isSafeAreaView?: boolean;
}

const ModalFullUI: FC<IModalFullUI> = ({
  modalProps,
  textButton = '',
  visibleButton,
  onClose,
  children,
  visibleDefaultContainer = true,
  isSafeAreaView = false,
}) => {
  const styles = useModalFullUIStyles();
  const Container = useMemo(
    () => (isSafeAreaView ? SafeAreaView : View),
    [isSafeAreaView]
  );

  return (
    <Modal {...modalProps}>
      <Container style={{ backgroundColor: styles.container.backgroundColor }}>
        {visibleDefaultContainer ? (
          <View style={styles.container}>
            <View style={styles.innerContainer}>
              <TouchableOpacity
                onPress={onClose}
                style={styles.buttonContainer}
              >
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
                <ButtonUI
                  text={textButton}
                  buttonProps={{ onPress: onClose }}
                />
              </View>
            )}
          </View>
        ) : (
          children
        )}
      </Container>
    </Modal>
  );
};

export default React.memo(ModalFullUI);
