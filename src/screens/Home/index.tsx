import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participants = [
    'Felipe Muniz',
    'Heli Ribeiro',
    'Werlley Ponte',
    'Joaquim Neto',
    'William Praciano',
    'Maria Alice Sousa',
    'Vander Sem Lei',
    'Poxa Bel',
  ];
  function handleParticipantAdd() {
    if (participants.includes('Felipe Muniz')) {
      return Alert.alert(
        'Participante existe',
        'Já existe um participante com esse nome.',
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.description}>Sexta, 10 de Outubro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder={'Nome do participante'}
          placeholderTextColor={'#6B6B6B'}
          keyboardType={'default'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant, idx) => (
          <Participant
            key={idx}
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
          />
        ))}
      </ScrollView> */}
    </View>
  );
}
