import React,{useState} from "react";
import style from './SearchBar.module.css'
import searchIcon from '../../img/magnifying-glass.png';

const SearchBar = ()=> { 
    const [input, setInput] = useState("");
    const handleSubmit = (e) => { 
         e.preventDefault(); 
         console.log('sdfsdfsdfsdf',e.target)

    }
    const handleChande = (e) => { 
        setInput(e.target.value)
    }

    console.log('ESTE ES EL VALOR DEL INPUT', input)

    return (
        <form onSubmit={(e) => handleSubmit(e)} className={style.form}> 
            <input type='text' onChange={handleChande} placeholder={'Search any crypto'} className={style.inputText}/>
            <button type="submit" className={style.button}> 
                <img src={searchIcon} className={style.img}/>
            </button>
        </form>
    );
}

export default SearchBar; 