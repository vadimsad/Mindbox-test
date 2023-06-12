export type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

export enum ViewOptions {
	ALL = 'ALL',
	ACTIVE = 'ACTIVE',
	COMPLETED = 'COMPLETED',
}
