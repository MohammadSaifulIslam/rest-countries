import React from 'react';
import Header from './components/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const App = () => {
  const navigation = useNavigation();
  console.log(navigation)
  return (
    <div> 
      <Header></Header>
      {
        navigation.state === "loading" && <div className='flex justify-center h-screen items-center'><progress className="progress progress-info  w-56 "></progress></div>
      }
      <Outlet></Outlet>
    </div>
  );
};

export default App;