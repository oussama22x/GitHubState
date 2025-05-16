import React, { useState } from 'react';
import '../styling/SearchForm.css';
function SearchForm({Onsearch}){
    const [username, Setusername] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        if(username.trim() === '') return;
        Onsearch(username);
        Setusername('');
    }

    return (
        <div className='FROM'>
        <div className='search-container'>
            <h1>Github User Search</h1>
            <p>Search for any Github user and see their profile information.</p>
        </div>
        <form onSubmit={handelSubmit} className='search-form'>
            <input 
                type="text"
                placeholder='Try oussama22x'
                value={username}
                onChange={(e) => Setusername(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
        </div>
    )

}

export default SearchForm;