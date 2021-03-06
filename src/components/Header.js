import PropTypes from "prop-types";
import { useLocation } from 'react-router-dom'
import Button from './Button';

const Header = ( {title, onAdd, showAdd} ) => {
    const location = useLocation()

    return (
        <div>
            <header className='header'>
                    <h1>{title}</h1>
                    {location.pathname ==='/' && (<Button 
                    text={showAdd ? 'Close' : 'Add'} 
                    color={showAdd ? 'red' : 'green'} 
                    onClick={onAdd} />)}
                </header>            
        </div>
    )
}

Header.defaultProps = {
    title: 'React Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
