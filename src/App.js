import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container className='App'>
        <h1>Hello</h1>
      </Container>
    </ThemeProvider>
  )
}

export default App
