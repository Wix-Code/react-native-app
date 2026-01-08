import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";

export default function signin() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.logo}>Where do you live?</Text>

        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.subText}>
            Get started today with Radixsol
          </Text>
        </View>
        <Pressable style={styles.signIn}>
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

  card: {
    padding: 20,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#171A1F",
    marginBottom: 20,
  },

  welcomeSection: {
    marginBottom: 30,
  },

  welcomeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#8D90A1",
    textTransform: "uppercase",
  },

  subText: {
    fontSize: 34,
    color: "#2A2A37",
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginTop: 6,
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
});
