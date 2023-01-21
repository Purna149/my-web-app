import React from 'react';
// import {Event_List} from './components/Event_List';
import EventList from './components/EventList'; // defult impot
import EventDetails from './components/EventDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
//import Home from './components/Home';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<EventList />} />
       <Route exact path='/event-details' element={<EventDetails />} />
       {/* <Route exact path='/all-event-details' element={<Home />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;