import { Flex, Text, Image, Link } from '@chakra-ui/react'

import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
        <title>Luã Álvaro</title>
      </Head>
      <Flex
        background="#333"
        height="100vh"
        fontFamily="Montserrat"
        color="white"

        direction="column"
        align="center"
      >

        <Image
          src="/profile.png"
          width="96px"
          height="96px"

          borderRadius="500px"

          mt="30px"
        />

        <Text
          fontSize="14px"
          my="10px"
        >
          LUÃ ÁLVARO
        </Text>

        <Link
          href="#"

          my="10px"

          display="flex"
          alignItems="center"
          justifyContent="center"

          width="100%"
          maxW="325px"
          height="40px"
          bg="#fff"

          color="#405090"

          borderRadius="5px"
          fontWeight="700"
        >
          PRODUTO 01
        </Link>

        <Link
          href="#"

          my="10px"

          display="flex"
          alignItems="center"
          justifyContent="center"

          width="100%"
          maxW="325px"
          height="40px"
          bg="#fff"

          color="#405090"

          borderRadius="5px"
          fontWeight="700"
        >
          PRODUTO 02
        </Link>

        <Link
          href="#"

          my="10px"

          display="flex"
          alignItems="center"
          justifyContent="center"

          width="100%"
          maxW="325px"
          height="40px"
          bg="#fff"

          color="#405090"

          borderRadius="5px"
          fontWeight="700"
        >
          PRODUTO 03
        </Link>

        <Link
          href="#"

          my="10px"

          display="flex"
          alignItems="center"
          justifyContent="center"

          width="100%"
          maxW="325px"
          height="40px"
          bg="#fff"

          color="#405090"

          borderRadius="5px"
          fontWeight="700"
        >
          PRODUTO 04
        </Link>

        <Flex
          mt="20px"
          fontSize="25px"
        >
          <Link
            href="#"
            className="fab fa-facebook-f"
          ></Link>

          <Link
            href="#"
            className="fab fa-instagram"
            mx="20px"
          ></Link>

          <Link
            href="#"
            className="fab fa-twitter"
          ></Link>
        </Flex>

      </Flex>
    </>
  )
}
