import { useSelector } from 'react-redux';
import { AppStateObject } from '../../models/types';
import CounterNumber from '../reusable/CounterNumber';
import CardDivider from '../reusable/CardDivider';
import CardTitle from '../reusable/CardTitle';

const CounterCard = () => {
	const { days, hours, minutes, seconds } = useSelector(
		(state: AppStateObject) => ({
			days: state.counter.countdown.days,
			hours: state.counter.countdown.hours,
			minutes: state.counter.countdown.minutes,
			seconds: state.counter.countdown.seconds,
		})
	);

	return (
		<>
			<div>
				<div className='counter-card animated relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value={days} />
					<CardDivider />
				</div>
				<CardTitle text='days' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value={hours} />
					<CardDivider />
				</div>
				<CardTitle text='hours' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value={minutes} />
					<CardDivider />
				</div>
				<CardTitle text='minutes' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value={seconds} />
					<CardDivider />
				</div>
				<CardTitle text='seconds' />
			</div>
		</>
	);
};

export default CounterCard;
