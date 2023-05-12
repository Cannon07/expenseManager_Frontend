import '../styles/globals.css'
import { NextUIProvider, createTheme, globalCss } from '@nextui-org/react'

// const globalStyles = globalCss({
//   html: {
//     padding: 0,
//     margin: 0,
//     // colorScheme: 'dark',
//   },

//   body: {
//     padding: 0,
//     margin: 0,
//     color: "white",
//     background: "#16181A",
//   },

//   a: {
//     color: "inherit",
//     textDecoration: "none",
//   }

//   * {
//     boxSizing: "border-box",
//   }
// })

// const theme = createTheme({
//   type: "dark",
//   theme: {
//     colors: {
//       background: '#16181A',
//       text: '#fff',
//       myDarkColor: '#ff4ecd',
//     },
//   },
//   fonts: {
//     sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
//     mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono'"
//   }
// })

function MyApp({ Component, pageProps }) {
  // globalStyles();
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp
