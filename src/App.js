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
    <div className="flex flex-col items-start justify-center gap-y-5">
      <Navbar />
      <div className="grid grid-cols-4 items-start justify-between">
        <div className="" >
        <Patient />
        </div>
        {pendProf ? (
        <div className="col-span-2 bg-yellow-600 ">
          <DiagnosticHistory />
          <DiagnosticList />
        </div>
        ):(
          <div className="">Loading Profile...</div>
        )
         }
        <div className="">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default App;
