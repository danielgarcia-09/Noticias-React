import PropTypes from 'prop-types';
import styles from './Header.module.css';

const Header = ({title}) => {
    return ( 
        <nav className="nav-wrapper light-blue darken-3">
            <a href="#!" className={` ${styles['text-small']} brand-logo center`}>{title}</a>
        </nav>
     );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header;
