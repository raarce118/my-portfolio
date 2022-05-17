import React, { useEffect } from 'react';

function Nav(props) {
    const { currentPage, setCurrentPage} = props;
    useEffect(() => {
    document.title = currentPage
}, [currentPage]);

return (
    <nav>
        <div className='tab-pages'>


            <div className='nav-1tab'>
                 <div className='nav-tab'>
                     <a
                         className={currentPage === 'About' ? 'navActive' : ''}>
                         <span onClick={() => setCurrentPage('About')}>About Me</span>
                     </a>
                 </div>
            </div>

            <div className='nav-2tab'>
                 <div className='nav-tab'>
                     <a
                         className={currentPage === 'Portfolio' ? 'navActive' : ''}>
                         <span onClick={() => setCurrentPage('Portfolio')}>Portfolio</span>
                     </a>
                 </div>
            </div>

            <div className='nav-3tab'>
                 <div className='nav-tab'>
                     <a
                         className={currentPage === 'Contact' ? 'navActive' : ''}>
                         <span onClick={() => setCurrentPage('Contact')}>Contact</span>
                     </a>
                 </div>
            </div>

            <div className='nav-4tab'>
                 <div className='nav-tab'>
                     <a
                         className={currentPage === 'Resume' ? 'navActive' : ''}>
                         <span onClick={() => setCurrentPage('Resume')}>Resume</span>
                     </a>
                 </div>
            </div>
        </div>
    </nav>
)

}

export default Nav
