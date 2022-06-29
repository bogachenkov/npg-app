import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ReactElement, ReactNode, useCallback, useState } from 'react'
import MainLayout from '@modules/layouts/MainLayout/MainLayout';
import { NextPage } from 'next'

interface CustomAppProps extends AppProps {}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = CustomAppProps & {
  Component: NextPageWithLayout
}


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = useCallback(
    (color?: ColorScheme) => setColorScheme(color || (colorScheme === 'dark' ? 'light' : 'dark')),
  [colorScheme]);

  const getLayout = Component.getLayout || ((page: ReactElement) => <MainLayout>{page}</MainLayout>)

  return (
    <ApolloProvider client={client}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme
          }}
        >
          { getLayout(<Component {...pageProps} />) }
        </MantineProvider>
      </ColorSchemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
