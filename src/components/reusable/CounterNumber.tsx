import { CounterNumberProps } from '../../models/types';

const CounterNumber: React.FC<CounterNumberProps> = ({ value }) => {
	return (
		<div className='relative w-full h-full flex justify-center items-center text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[10rem] text-softRed font-bold'>
			<p>{value}</p>
			<div className='card-top absolute top-0 right-0 bottom-1/2 left-0 pt-4 sm:pt-6 md:pt-9 lg:pt-11 xl:pt-10 overflow-hidden z-10'>
				{value}
			</div>
			<div className='card-bottom absolute top-1/2 right-0 bottom-0 left-0 overflow-hidden z-10'>
				<p className='absolute right-0 left-0 bottom-5 sm:bottom-7 md:bottom-10'>{value}</p>
			</div>
		</div>
	);
};

export default CounterNumber;
