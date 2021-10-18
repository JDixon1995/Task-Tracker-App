import PropTypes from "prop-types";

const Header = ( {title} ) => {
    return (
        <div className='container'>
            <header>
                    <h1>{title}</h1>
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
