//npm install axios
import axios  from 'axios'
import { useState } from 'react'
import css from '../App/App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'
import { ImageGallery} from '../ImageGallery/ImageGallery.jsx'

function App() {
    const key = 'CS-WUSttKITitf62ZZvU2KgNX3krMbctQMPMvCg8PHM';
    const [elements, setElements] = useState([]);

    const searchImages = async query => {
        try {
            const response =await axios.get('https://api.unsplash.com/photos/', {
                params: { query: `${query}` },
                headers: {
                    Authorization: `Client-ID ${key}`
                }
                
            } )
            setElements(response.data)
            console.log(response.data);
            //маленькі картинки
            
            // //великі картинки
            // console.log('вел', response.data.urls.regular)

        } catch(error) {
            
        }
        console.log(query);
    }
    return (
        <div>
            <SearchBar onSearch={searchImages}></SearchBar>
             <ImageGallery onElements={ elements} />
      </div>
  )
}

export default App
//await axios.get(`https://api.unsplash.com/photos/?client_id=${key} query=${query}`);