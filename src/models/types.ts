export interface CounterNumberProps {
	value: number;
}

export interface CardTitleProps {
	text: string;
}

interface DateInterface {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export interface ActionInterface {
	type: string;
	payload: DateInterface;
}

export interface AppStateObject {
	counter: {
		countdown: DateInterface;
	};
}
