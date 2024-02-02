//npm install axios
import axios from 'axios'
import { useEffect, useState } from 'react'
import css from '../App/App.module.css'
//npm install react-hot-toast
import  { Toaster } from 'react-hot-toast';
import { SearchBar } from '../SearchBar/SearchBar'
import { ImageGallery } from '../ImageGallery/ImageGallery.jsx'
import { Loader } from '../Loader/Loader.jsx'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage.jsx'
import { LoadMoreBtn } from '../LoadMoreBtn/LoadMoreBtn.jsx';

function App() {
    const key = 'CS-WUSttKITitf62ZZvU2KgNX3krMbctQMPMvCg8PHM';
    const [elements, setElements] = useState([]);
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const searchImages = async newQuery => {
        setQuery(newQuery)
        setPage(1);
        setElements([]);
        setLoading(false);
        setError(false)
       
        // try {
        //     setLoading(true)
        //     setElements([]);
        //     const response =await axios.get('https://api.unsplash.com/photos/', {
        //         params: { query: `${query}` },
        //         headers: {
        //             Authorization: `Client-ID ${key}`
        //         }
                
        //     } )
        //     setElements(response.data)
            
        // } catch(error) {
        //     setError(true)
        // } finally {
        //     setLoading(false)
        // }
        // console.log(query);
    }
    const handleLoadMore = () => {
        setPage(page + 1);
        console.log(page);
    }
    useEffect(() => {
        if (query === '') {
            return;
        }
        async function fetchData() {
            try {
                setLoading(true)
                setElements([]);
                const response =await axios.get('https://api.unsplash.com/photos/', {
                    params: { query: `${query}`,  page:`${page}` },
                    headers: {
                        Authorization: `Client-ID ${key}`
                    }
                })
                setElements(response.data)
            
            } catch(error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData();
        console.log('ele',query, 'pag', page);
    }, [query, page])
    return (
        <div>
            <SearchBar onSearch={searchImages}></SearchBar>
            {loading && <Loader />}
            { error && <ErrorMessage/>}
            <ImageGallery onElements={elements} />
            <LoadMoreBtn onClick={ handleLoadMore} />
            <Toaster/>
      </div>
  )
}

export default App
