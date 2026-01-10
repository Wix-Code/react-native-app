import { Ionicons } from '@expo/vector-icons';
import { default as React } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text, TextInput, View
} from 'react-native';

type Props = {
  onNext: () => void
  back: () => void
}
export default function Location({onNext, back}: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>

        <View style={styles.arrow}>
          <Ionicons onPress={back} name="arrow-back-outline" size={20} color="black" />
        </View>
        <Text style={styles.logo}>Where do you live?</Text>

        <View style={styles.welcomeSection}>
          <Text style={styles.subText}>
            Home Zip code
          </Text>
          <TextInput style={styles.input} />
        </View>
        
        <Pressable onPress={onNext} style={styles.signIn}>
          <Text style={styles.signInText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffffffff",
  },

  image: {
    width: "100%",
    height: 415,
  },

  arrow: {
    marginBottom: 20
  },

  card: {
    padding: 20,
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#171A1F",
    marginBottom: 20,
    fontFamily: "Poppins_700Bold",
  },

  welcomeSection: {
    marginBottom: 30,
  },

  welcomeText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#8D90A1",
    textTransform: "uppercase",
  },

  subText: {
    fontSize: 14,
    color: "#2A2A37",
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginTop: 6,
    fontFamily: "Poppins_700Bold",
  },

  authActions: {
    marginTop: 10,
  },

  signIn: {
    backgroundColor: "#4069E1",
    height: 52,
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins_500Medium",
  },

  signOut: {
    height: 52,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2A2A37",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#fff",
  },

  signOutText: {
    color: "#2A2A37",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 48,
    borderRadius: 16,
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    paddingLeft: 10,
    paddingRight: 10,
  }
});
