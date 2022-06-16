import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Store/Contex';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const islogin = useContext(AuthContex)

  const login = islogin.isLoggeIn
  const logouthandle=()=>{
    islogin.logout()
  }
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!login && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          {login &&

            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            

          }
          {
            login &&
            <li>
            <button onClick={logouthandle}>Logout</button>
          </li>
          }

         
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
