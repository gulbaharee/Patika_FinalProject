import React from 'react';
import {Modal, SafeAreaView, Pressable, Image, Text} from 'react-native';
import styles from './ImagePicker.style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ImagePickerModal = ({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      style={styles.modal}>
      <SafeAreaView style={styles.buttons}>
        <Pressable style={styles.button} onPress={onImageLibraryPress}>
          <Icon name="image" size={24} />
          <Text style={styles.buttonText}>Library</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={onCameraPress}>
          <Icon name="camera" size={24} />
          <Text style={styles.buttonText}>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};

export default ImagePickerModal;
