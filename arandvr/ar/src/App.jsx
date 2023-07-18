import './App.css'
import Form from './Component/Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import GLBViewer from './Component/GlbViewer'

function App() {

  return (
    <>
     <div>
      <h1>File Upload </h1>
      <Form />
      <GLBViewer/>
    </div>
    </>
  )
}

export default App
