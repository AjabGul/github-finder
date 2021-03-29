import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = props => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={props.icon } />
                { props.title}
            </h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="http://agk_jsprojects.surge.sh/">Back</a>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: ' AGK Github Finder',
    icon: 'fab fa-github'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar