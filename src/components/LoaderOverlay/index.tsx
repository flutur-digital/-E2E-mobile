import React from 'react';
import { View,Modal, ActivityIndicator} from 'react-native';
import {MainColor} from "../../theme";
import styles from './styles';

interface Props{
  loading: boolean
}

const LoaderOverlay : React.FC<Props> = ({loading}) => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={loading}
      >
        <View style={styles.overlayContent}>
          <ActivityIndicator size="large" color={MainColor} />
        </View>
      </Modal>

    )
}
export default LoaderOverlay;
