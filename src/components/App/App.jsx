//npm install axios
import axios from 'axios'
import { useState } from 'react'
import css from '../App/App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { ImageGallery } from '../ImageGallery/ImageGallery.jsx'
import { Loader } from '../Loader/Loader.jsx'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage.jsx'

function App() {
    const key = 'CS-WUSttKITitf62ZZvU2KgNX3krMbctQMPMvCg8PHM';
    const [elements, setElements] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const searchImages = async query => {
        try {
            setLoading(true)
            setElements([]);
            const response =await axios.get('https://api.unsplash.com/photos/', {
                params: { query: `${query}` },
                headers: {
                    Authorization: `Client-ID ${key}`
                }
                
            } )
            setElements(response.data)
            
        } catch(error) {
            setError(true)
        } finally {
            setLoading(false)
        }
        console.log(query);
    }
    return (
        <div>
            <SearchBar onSearch={searchImages}></SearchBar>
            {loading && <Loader />}
            { error && <ErrorMessage/>}
             <ImageGallery onElements={ elements} />
      </div>
  )
}

export default App
