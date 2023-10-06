import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCountdown } from './store/counterSlice';
import Main from './components/Main';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const countdownDate = new Date();
		countdownDate.setDate(countdownDate.getDate() + 14);

		const updateCountdown = () => {
			const currentDate = new Date();
			const remainingTime = countdownDate.getTime() - currentDate.getTime();

			if (remainingTime > 0) {
				const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

				dispatch(setCountdown({ days, hours, minutes, seconds }));
			} else {
				clearInterval(intervalId);
			}
		};

		const intervalId = setInterval(updateCountdown, 1000);

		updateCountdown();

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<Main />
		</>
	);
};

export default App;
