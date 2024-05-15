import { Center, HStack, ScrollView, Text } from 'native-base'
import React from 'react'

const Home = () => {
  return (
    <ScrollView>
      <Center>
        {/* <Text>ホーム画面</Text> */}
        <Center marginTop={4}>
          {}
          <HStack>
            <Text style={{ color: 'red' }} fontWeight={'bold'} fontSize={'3xl'}>
              テスト
            </Text>
            <Text style={{ color: 'green' }} fontWeight={'bold'} fontSize={'3xl'}>
              テスト
            </Text>
            <Text style={{ color: 'blue' }} fontWeight={'bold'} fontSize={'3xl'}>
              テスト
            </Text>
          </HStack>
        </Center>
      </Center>
    </ScrollView>
  )
}

export default Home
