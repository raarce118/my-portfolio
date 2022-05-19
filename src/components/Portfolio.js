import React from 'react';
import Project from './Project';

function Portfolio() {
    const projectArr = [
        {
            name: 'Spare-Parts',
            link: 'https://spare-parts-az.herokuapp.com/',
            img: '/images/Spare-Parts.png'
        },

        {
            name: 'Copy-right',
            link: 'https://moses-ian.github.io/copyright-timer',
            img: '/images/Copy-right.png'
        },

        {
            name: 'Password-gen',
            link: 'https://raarce118.github.io/Password-Generator/',
            img: '/images/Password-gen.png'
        }
    ];

    return(
        <section>
            <div>
                <h4 className='port-header'>Portfolio</h4>
            </div>

            <div className='card-container'>
                { projectArr.map(entry => {
                    return(
                        <Project projectArr={entry}></Project>
                    )
                })}
            </div>
        </section>
    )
};

export default Portfolio;