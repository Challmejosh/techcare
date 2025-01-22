import Navbar from "./Components/Navbar/Navbar";
import Patient from "./Components/Main/Patient";
import Profile from "./Components/Main/Profile";
import DiagnosticList from "./Components/Main/DiagnosticList";
import DiagnosticHistory from "./Components/Main/DiagnostHistory";
import {AppContext} from './Utilities/Context';
import {useContext} from 'react';

function App() {
  const {pendProf} = useContext(AppContext)
  return (
    <div className="flex w-full bg-[#F6f7f9] flex-col items-start justify-center gap-y-5">
      <Navbar />
      <div className="grid mx-3 gap-x-5 grid-cols-4 items-start justify-between">
        <div className="" >
        <Patient />
        </div>
        {pendProf ? (
        <div className="col-span-2 grid  h-full items-start justify-between gap-y-5 ">
          <DiagnosticHistory />
          <DiagnosticList />
        </div>
        ):(
          <div className="col-span-2">Loading Profile...</div>
        )
         }
         {pendProf ? (

           <div className="">
             <Profile />
           </div>
         ):(
          <div className="">Loading....</div>
         )}
      </div>
    </div>
  );
}

export default App;
