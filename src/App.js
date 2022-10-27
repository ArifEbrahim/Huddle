import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { Container } from './components/styles/Container.styled'
import content from './content'
import Card from './components/Card'

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
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
    </ThemeProvider>
  )
}

export default App
