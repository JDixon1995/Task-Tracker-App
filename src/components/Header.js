import PropTypes from "prop-types";
import Button from './Button';

const Header = ( {title} ) => {

    const onClick = () => {
        console.log('Clicked')
    }

    return (
        <div>
            <header className='header'>
                    <h1>{title}</h1>
                    <Button text='Add' color='green' onClick={onClick} />
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
