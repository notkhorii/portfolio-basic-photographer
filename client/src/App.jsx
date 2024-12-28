import './App.css'
import MainLayout from './layouts/MainLayout'
import Hero1 from './components/Hero1'
import Carousel from './components/carousel/Carousel'
import Hero2 from './components/Hero2'
import Hero3 from './components/Hero3'

function App() {
  return(
    <MainLayout>
      <Hero1/>
      <Carousel/>
      <Hero2/>
      <Hero3/>
    </ MainLayout>
  )
}

export default App
