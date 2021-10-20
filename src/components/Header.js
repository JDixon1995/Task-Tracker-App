import PropTypes from "prop-types";
import Button from './Button';

const Header = ( {title, onAdd} ) => {

    return (
        <div>
            <header className='header'>
                    <h1>{title}</h1>
                    <Button text='Add' color='green' onClick={onAdd} />
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
