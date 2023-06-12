import React, { memo } from 'react';
import { Nav } from 'react-bootstrap';

type TodoViewProps = {
	changeViewOption: (option: null | string) => void;
};

const TodoViewMode: React.FC<TodoViewProps> = ({ changeViewOption }) => {
	return (
		<Nav
			variant='pills'
			defaultActiveKey='all'
			onSelect={changeViewOption}
			className='pt-3 border-top justify-content-center gap-2'
		>
			<Nav.Item>
				<Nav.Link eventKey='ALL'>All</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey='ACTIVE'>Active</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey='COMPLETED'>Completed</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default memo(TodoViewMode);
