import {AppBar, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'
import { routePath } from '../routes/route'

const Header = () => {
    const logo = "https://looka.com/wp-content/themes/looka/images/logos/looka_logo_black.svg"
    return (
        <AppBar>
            <Toolbar>
            <Link>
                <img src={logo} alt='logo' height={28}/>
            </Link>
            <Link to={routePath.create} style={{textDecoration: 'none', marginRight: 20, color: 'inherit', fontSize: 14, marginLeft: 20}}>Post a job</Link>
            <Link to={routePath.posts}  style={{textDecoration: 'none', marginRight: 20, color: 'inherit', fontSize: 14}}>Find jobs</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;