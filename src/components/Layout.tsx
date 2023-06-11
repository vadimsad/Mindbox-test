import React from 'react';
import { Container } from 'react-bootstrap';

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<Container className='d-flex flex-column' fluid>
			<header className='mt-2 mb-4'>
				<h1 className='text-center text-primary'>todo app</h1>
			</header>
			<main className='flex-grow-1'>{children}</main>
			<footer>
				<h6 className='text-secondary text-center'></h6>
			</footer>
		</Container>
	);
};

export default Layout;
