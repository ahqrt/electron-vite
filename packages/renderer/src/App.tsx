import { HashRouter, Route, Routes } from 'react-router-dom'
import Example from './pages/example/Example'

const App = () => {
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Example />} />
        </Routes>
      </HashRouter>
  )
}

export default App
