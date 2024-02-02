import css from '../SearchBar/SearchBar.module.css'
import { FcSearch } from "react-icons/fc";
export const SearchBar = ({ onSearch}) => {
    const handleSumbit = even => {
        even.preventDefault();
        onSearch(even.target.elements.query.value);
        even.target.reset();
     }

    return (
        <form onSubmit={handleSumbit}>
            <button type='submit'><FcSearch /></button>
            <input type="text" name="query" placeholder='Search images and photos' />
            
        </form>
    )
}