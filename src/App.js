import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Statistics } from "./components/Statistics";
import { Tasks } from "./components/Tasks";


function App() {

  const [orders, setOrders] = useState([
    { id: 123455, order: '#890PO90', name: 'Bryan Williams', img: 'imgprogres', date: '1 day left'}, 
    { id: 123456, order: '#890PO90', name: 'Marcus Klaus', img: 'imgProgres', date: '3 days left'},
    { id: 123457, order: '#890PO90', name: 'Peter Parker', img: 'imgProgres', date: '3 days left'},
    { id: 123458, order: '#890PO90', name: 'Clark Kent', img: 'imgProgres', date: '3 days left'},
    { id: 123459, order: '#890PO90', name: 'Tony Stark', img: 'imgProgres', date: '3 days left'}
  ])


  return (
    <div className="app__main">
      
      <Navbar />

      <Tasks orders={orders}/>

      <Statistics />
      
    </div>
  );
}

export default App;
