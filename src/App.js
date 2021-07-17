import './App.css';
import UserCard from './UserCard'

function App() {
  const user = {
    name:"Oghenero Inabor",
    age: 20,
    height: 5.9
  }
  return (
    <div className="App">
      <UserCard myUser={user}/>
      
    </div>
  );
}

export default App;
