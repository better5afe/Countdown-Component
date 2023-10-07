import { CounterNumberProps } from '../../models/types';

const CounterNumber: React.FC<CounterNumberProps> = ({ value, isAnimated }) => {
	let number;

	if (value >= 0 && value <= 9) {
		number = `0${value}`;
	} else {
		number = value;
	}

	return (
		<div className='relative w-full h-full flex justify-center items-center text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[10rem] text-softRed font-bold'>
			<p>{number}</p>
			<div
				className={`card-top ${
					isAnimated ? 'animated-top' : ''
				} absolute top-0 right-0 bottom-1/2 left-0 pt-4 sm:pt-6 md:pt-9 lg:pt-11 xl:pt-10 overflow-hidden z-10`}
			>
				{number}
			</div>
			<div
				className={`card-bottom ${
					isAnimated ? 'animated-bottom' : ''
				} absolute top-1/2 right-0 bottom-0 left-0 overflow-hidden z-10`}
			>
				<p className='absolute right-0 left-0 bottom-5 sm:bottom-7 md:bottom-10'>
					{number}
				</p>
			</div>
		</div>
	);
};

export default CounterNumber;
