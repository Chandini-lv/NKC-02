import './App.css'
import myImage from '../src/assets/myimage.jpeg'  // import image

function App() {
  return (
    <div className="app-container">
      <img className="responsive-image" src={myImage} alt="My Image" />
    </div>
  )
}

export default App