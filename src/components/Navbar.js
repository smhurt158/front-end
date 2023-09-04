import MenuItem from './MenuItem';

const Navbar = () => {
    
    return (
        <ul className="menus">
            <li>
                <MenuItem title="Home" link="home">

                </MenuItem>
            </li>
            <li>
                <MenuItem title="Gallery" link="gallery">

                </MenuItem>
            </li>
            <li>
                <MenuItem title="Home2">
                    <MenuItem title="Test1"></MenuItem>
                    <MenuItem title="Test1"></MenuItem>
                </MenuItem>
            </li>
        </ul>
    );
};

export default Navbar;