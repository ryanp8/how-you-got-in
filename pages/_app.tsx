import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

import { QueryContextProvider } from "../contexts/useQueryContext";
 
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryContextProvider>
        <Component {...pageProps} />
      </QueryContextProvider>
    </ChakraProvider>
  )
}
export default MyApp
