import CounterNumber from './CounterNumber';
import CardDivider from './CardDivider';
import CardTitle from './CardTitle';

const CounterCard = () => {
	return (
		<>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value='08' />
					<CardDivider />
				</div>
				<CardTitle text='days' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value='23' />
					<CardDivider />
				</div>
				<CardTitle text='hours' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	'>
					<CounterNumber value='55' />
					<CardDivider />
				</div>
				<CardTitle text='minutes' />
			</div>
			<div>
				<div className='counter-card relative flex justify-center items-center w-[7.5rem] h-[7.5rem] sm:w-[10rem] sm:h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] xl:w-[20rem] xl:h-[20rem]  mx-1 md:mx-3 lg:mx-10 bg-darkDesBlue rounded-lg overflow-hidden	 '>
					<CounterNumber value='41' />
					<CardDivider />
				</div>
				<CardTitle text='seconds' />
			</div>
		</>
	);
};

export default CounterCard;
