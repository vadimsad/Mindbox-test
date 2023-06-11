export type Todo = {
	id: number;
	text: string;
	completed: boolean;
};

export enum ViewOptions {
	ALL = 'all',
	ACTIVE = 'active',
	COMPLETED = 'completed',
}
