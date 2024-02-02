//npm install axios
import axios  from 'axios'
import { useState } from 'react'
import css from '../App/App.module.css'
import { SearchBar } from '../SearchBar/SearchBar'

function App() {
    const key = 'CS-WUSttKITitf62ZZvU2KgNX3krMbctQMPMvCg8PHM';
    const searchImages = async query => {
        try {
            const response = axios.get('https://api.unsplash.com/photos/', {
                params: { query: `${query}` },
                headers: {
                    Authorization: `Client-ID ${key}`
                }
            })
            console.log(response)
        } catch(error) {
            
        }
        console.log(query);
    }
    return (
        <div>
            <SearchBar onSearch={ searchImages}></SearchBar>
      </div>
  )
}

export default App
//await axios.get(`https://api.unsplash.com/photos/?client_id=${key} query=${query}`);