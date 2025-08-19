import './App.css'
import TodoList from "./components/TodoList/TodoList.jsx";
import Header from "./components/Header/Header.jsx";
import {useState} from "react";
import {DarkModeProvider} from "./context/DarkModeContext.jsx";

const filters = ['all', 'completed', 'active'];

function App() {
    const [filter, setFilter] = useState(filters[0]);
    return (
        <DarkModeProvider>
            <Header filters={filters} filter={filter} onFilterChange={ setFilter} />
            <TodoList filter={filter}/>
        </DarkModeProvider>
    )
}

export default App
