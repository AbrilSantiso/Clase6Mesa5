import "../styles/App.css"
import GuestsList from '../components/GuestsList(func)';
import TaskList from "../components/TaskList(class)";
const guests = [{name: "Nicolas", invited: true, food:" papas fritas"}, {name:"Iván", invited: false, food: "pizza"},{name: "Carolina", invited: true, food: "bebidas"}]
function App() {
  
  return (
    <div className="App">
      <h2><bold>Invitados:</bold></h2>
      <GuestsList guests = {guests}/>

      <h2>Tareas:</h2>
      <TaskList  guests = {guests}/>
    </div>
  );
}

export default App;
