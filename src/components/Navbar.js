import MenuItem from './MenuItem';

const Navbar = () => {
    
    return (
        <ul className="menus">
            <li>
                <MenuItem title="Home" link={process.env.PUBLIC_URL + "/home"}>

                </MenuItem>
            </li>
            <li>
                <MenuItem title="Gallery" link={process.env.PUBLIC_URL + "/gallery"}>

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