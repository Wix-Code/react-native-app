import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function index() {
  return (
    <View>
      <Text>Login in now</Text>
      <Link href="/login">Login</Link>
    </View>
  )
}
