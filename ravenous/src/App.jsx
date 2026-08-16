import SearchBar from "./components/search-bar-component.jsx";
import { BusinessList } from "./components/business-components.jsx";
import './App.css'

function App() {

  return (
    <div className="font-nunito">
        <div className="p-2.5 bg-btn-brown">
            <h1 className="text-4xl font-bold text-center bg-btn-brown text-white">ravenous</h1>
        </div>
      <SearchBar />
      <BusinessList />
    </div>
  )
}

export default App
