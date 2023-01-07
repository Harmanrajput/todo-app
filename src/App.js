import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Todos from './components/Todos';


function App() {
  return (
    <>
      <Header title="Mytodoslist" searchbar={true}/>
      <Todos/>
      <TodoItem/>
      <Footer/>
      
      </>
  )
}

export default App;
