import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type Props = {
  name: string;
  onRemove: () => void;
};

export const Participant: React.FC<Props> = ({ name, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
};
