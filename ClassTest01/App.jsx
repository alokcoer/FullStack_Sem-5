import Counter from './components/Counter';
import TodoList from './components/TodoList';
import LoginToggle from './components/LoginToggle';
import LiveSearchFilter from './components/LiveSearchFilter';
import Stopwatch from './components/Stopwatch';
import './styles.css';

export default function App() {
    return (
        <main className="dashboard-grid">
            <Counter />
            <TodoList />
            <LoginToggle />
            <LiveSearchFilter />
            <Stopwatch />
        </main>
    );
}