import toast from 'react-hot-toast';
import css from '../SearchBar/SearchBar.module.css'
import { FcSearch } from "react-icons/fc";
export const SearchBar = ({ onSearch}) => {
    const handleSumbit = even => {
         even.preventDefault();
        if (even.target.elements.query.value.trim() === "") {
            toast('Empty string!',
            {
                icon: '🧐',
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            }
            )
            return;
        }
       
        onSearch(even.target.elements.query.value);
        even.target.reset();
     }

    return (
        <header className={ css.containerHeader}>
            <form onSubmit={handleSumbit}>
                <button type='submit'><FcSearch /></button>
                <input type="text" name="query" placeholder='Search images and photos' autoComplete='off' autoFocus />
            </form>
        </header>
    )
}