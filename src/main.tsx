import ReactDOM from 'react-dom/client';
import TodoApp from './components/TodoApp.tsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<TodoApp />);
