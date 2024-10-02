import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchTickets } from './Features/TicketSlice.js';
import KanbanBoard from './Components/KanbanBoard.jsx';
import Controller from './Components/Controller.jsx';
import { Provider } from 'react-redux';
import store from './Store/Store';
import ApiData from './Components/Api.js';
import { setdata } from './Features/SettingSlice.js';
function App() {
  const dispatch = useDispatch();
  const [loading,setloading] = useState(true);
  useEffect(() => {
    const disdata = async()=>{
      try {
        const data =  await ApiData();
        console.log(data);    
        setloading(false);
        dispatch(setdata(data))
      } catch (error) {
        setloading(false);
        throw error;
      }

    }
    if(loading)
    {
      disdata();
    }
  }, [loading,dispatch]);
  // const data = useSelector((state)=>state.set.data)
  // console.log(data);

  
  return (
      <div className="app">
        <Controller />
        <KanbanBoard /> 
      </div>
  );
}

export default App;
