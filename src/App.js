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
      <div className="">
          <div className="hidden lg:flex w-full bg-[#F6f7f9] flex-col items-center justify-center gap-y-5">
            <Navbar />
            <div className="grid gap-x-5 grid-cols-4 items-start justify-between">
              <div className="" >
                  <Patient />
              </div>
              {pendProf ? (
                <div className="col-span-2 flex items-start justify-between gap-x-5 ">
                    <div className="w-full grid  h-full items-start justify-between gap-y-5 ">
                        <DiagnosticHistory />
                        <DiagnosticList />
                    </div>
              </div>
              ):(
                <div className="col-span-2 w-full flex items-center justify-center">
                   <div className="loader"></div>
                </div>
              )
              }
              {pendProf ? (
                <div className="w-full">
                  <Profile />
                </div>
                ):(
                  <div className=" w-full flex items-center justify-center">
                     <div className="loader"></div>
                  </div>
                )}
            </div>
      </div>
      <div className="flex lg:hidden">
              <div className="w-full flex flex-col items-center justify-center ">
                  <div className="loader"></div>
                  <div className=""> Switch to Desktop </div>
              </div>
      </div>
    </div>
  );
}

export default App;
