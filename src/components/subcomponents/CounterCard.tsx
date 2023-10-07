import { useState, useEffect } from 'react';
import { CounterCardProps } from '../../models/types';
import CounterNumber from '../reusable/CounterNumber';
import CardDivider from '../reusable/CardDivider';
import CardTitle from '../reusable/CardTitle';

const CounterCard: React.FC<CounterCardProps> = ({ countdownDate }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	const [animateDays, setAnimateDays] = useState(false);
	const [animateHours, setAnimateHours] = useState(false);
	const [animateMinutes, setAnimateMinutes] = useState(false);
	const [animateSeconds, setAnimateSeconds] = useState(false);

	useEffect(() => {
		updateCountdown();
	}, []);

	useEffect(() => {
		const interval = setInterval(updateCountdown, 1000);
		return () => clearInterval(interval);
	}, [days, hours, minutes, seconds]);

	const updateCountdown = () => {
		const currentDate = new Date();
		const remainingTime = countdownDate.getTime() - currentDate.getTime();

		if (remainingTime > 0) {
			let countdownDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
			let countdownHours = Math.floor(
				(remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let countdownMinutes = Math.floor(
				(remainingTime % (1000 * 60 * 60)) / (1000 * 60)
			);
			let countdownSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

			setAnimateDays(false);
			setAnimateHours(false);
			setAnimateMinutes(false);
			setAnimateSeconds(true);

			setDays(countdownDays);
			setHours(countdownHours);
			setMinutes(countdownMinutes);
			setSeconds(countdownSeconds);

			if (countdownDays !== days && days !== 0) {
				setDays(countdownDays);
				setAnimateDays(true);
			}

			if (countdownHours !== hours && hours !== 0) {
				setHours(countdownHours);
				setAnimateHours(true);
			}

			if (countdownMinutes !== minutes && minutes !== 0) {
				setMinutes(countdownMinutes);
				setAnimateMinutes(true);
			}
		} else {
			return;
		}
	};

	return (
		<>
			<div>
				<div className='counter-card animated relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value={days} isAnimated={animateDays} />
					<CardDivider />
				</div>
				<CardTitle text='days' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value={hours} isAnimated={animateHours} />
					<CardDivider />
				</div>
				<CardTitle text='hours' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value={minutes} isAnimated={animateMinutes} />
					<CardDivider />
				</div>
				<CardTitle text='minutes' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value={seconds} isAnimated={animateSeconds} />
					<CardDivider />
				</div>
				<CardTitle text='seconds' />
			</div>
		</>
	);
};

export default CounterCard;
