import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/layout/home'
import About from './components/layout/home/about'
import Contact from './components/contact'
import Projects from './components/projects'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
