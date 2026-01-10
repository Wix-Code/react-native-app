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
export default function Otp({onNext, back}: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <View style={styles.arrow}>
          <Ionicons name="arrow-back-outline" onPress={back} size={20} color="black" />
        </View>
        <Text style={styles.logo}>6 digit-code</Text>

        <View style={styles.welcomeSection}>
          <Text style={styles.subText}>
            Enter the code we send to (504) 968-4139
          </Text>
        </View>

        <View style={styles.email}>
          <TextInput style={styles.input} />
        </View>

        <View style={styles.welcomeSection}>
          <Text style={styles.subText}>
            Code is expired in 4:57s
          </Text>

          <Text style={styles.resend}>
            Resend
          </Text>
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

  arrow: {
    marginBottom: 20
  },
  
  image: {
    width: "100%",
    height: 415,
  },

  card: {
    padding: 20,
  },

  resend: {
    fontSize: 16,
    color: "#4069E1",
    letterSpacing: 0.25,
    marginTop: 10,
    fontFamily: "Poppins_400Regular",
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#171A1F",
    marginBottom: 10,
    fontFamily: "Poppins_700Bold",
  },

  welcomeSection: {
    marginBottom: 10,
  },

  email: {
    marginBottom: 30,
  },

  welcomeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8D90A1",
    textTransform: "uppercase",
  },

  subText: {
    fontSize: 16,
    color: "#9095A0",
    letterSpacing: 0.25,
    marginTop: 6,
    fontFamily: "Poppins_400Regular",
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