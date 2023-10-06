import CounterCard from './CounterCard';

const Counter = () => {
	return (
		<div className='container md:max-w-[1000px] mx-auto px-5 md:px-0 pt-40 md:pt-60 lg:pt-20 text-center'>
			<h1 className='px-10 md:px-0 mb-16 md:mb-28 text-[1.8rem] md:text-[3.5rem] lg:text-[3.5rem] text-white uppercase font-[700] tracking-[4px] leading-tight'>
				We're launching soon
			</h1>
			<div className='flex justify-center'>
				<CounterCard />
			</div>
		</div>
	);
};

export default Counter;
