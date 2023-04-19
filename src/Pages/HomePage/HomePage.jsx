import {Link} from 'react-router-dom';
import classes from './HomePage.module.css';
import { Helmet } from 'react-helmet';
import favicon from '../../img/favicon.jpg'
import { removeUser } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth'

const HomePage = () => {
	const dispatch = useDispatch();
	const {isAuth, email} = useAuth();
	return isAuth ? (
		<div className='HomePage'>
		<Helmet>
			<title>Home</title>
			<link rel="icon" type="image/ico" href={favicon} />
		</Helmet>
		<div className={classes.wrapper}>
			<button onClick={()=> dispatch(removeUser())}>Log out from {email}</button>
		</div>
		</div>
	) : (
		<div>
			Go to <Link to="/fruits">fruits</Link>
			Go to <Link to="/login">login</Link>
		</div>
		
	)
}

export default HomePage;