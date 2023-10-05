import { CounterNumberProps } from '../../models/types';

const CounterNumber: React.FC<CounterNumberProps> = ({ value }) => {
	return <p className='text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[10rem] text-softRed font-bold'>{value}</p>;
};

export default CounterNumber;
