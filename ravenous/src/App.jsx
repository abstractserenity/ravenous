import SearchBar from "./components/search-bar-component.jsx";
import { BusinessList } from "./components/business-components.jsx";
import './App.css'

function App() {

  return (
    <>
        <div className="p-2.5 bg-amber-400">
            <h1 className="text-4xl font-bold text-center bg-amber-400 text-white">ravenous</h1>
        </div>
      <SearchBar />
      <BusinessList />
    </>
  )
}

export default App
