import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import {
	getUsersSelector,
	getErrorSelector,
	getLoadingSelector,
} from './store/user/selectors';
import { fetchUserRequest } from './store/user/actions';

const App = () => {
	const dispatch = useDispatch();
	const users = useSelector(getUsersSelector);
	const error = useSelector(getErrorSelector);
	const loading = useSelector(getLoadingSelector);

	useEffect(() => {
		dispatch(fetchUserRequest());
	}, [dispatch]);

	return (
		<div style={{ padding: '15px' }}>
			<h1>Users</h1>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error</div>
			) : (
				users.map((user, index) => (
					<div style={{ marginBottom: '10px' }} key={user.id}>
						{++index}. {user.name}
					</div>
				))
			)}
		</div>
	);
};

export default App;
