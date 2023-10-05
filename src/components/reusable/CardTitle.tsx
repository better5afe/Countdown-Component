import { CardTitleProps } from '../../models/types';

const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
	return (
		<p className='mt-10 md:text-[1.5rem] lg:text-[2rem] text-grayishBlue uppercase font-[700] tracking-widest'>
			{text}
		</p>
	);
};

export default CardTitle;
