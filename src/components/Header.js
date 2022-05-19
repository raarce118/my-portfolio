import React from 'react';
import Nav from './Nav'

function Header(props) {
    const { currentPage, setCurrentPage } = props;

    return (
       
        <header className='container'>
            <div className='name-header'>
                <h1>Rich <span className='last-header'>Arce</span></h1>
            </div>
            <div className='navigation'>
                <Nav 
                 currentPage={currentPage}
                setCurrentPage={setCurrentPage} 
                ></Nav>
            </div>
        </header>
           );    
}

export default Header;