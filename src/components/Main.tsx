import Counter from './subcomponents/Counter';
import BottomSection from './subcomponents/BottomSection';

const Main = () => {
	return (
		<main className='relative w-screen h-screen bg-darkBlue'>
			<Counter />
			<BottomSection />
		</main>
	);
};

export default Main;
