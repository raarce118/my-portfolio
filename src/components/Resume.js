import React from 'react';

function Resume () {

    return (
        <section>

            <h5 className ='res-header'>Resume</h5>

            <p className='res-link'>Click to <a className='dl-link' href={process.env.PUBLIC_URL + '/images/RichArce_Resume_30JUL2018 (1).pdf'}>download</a></p>
        </section>
    )
}

export default Resume;