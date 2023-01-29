import './App.css';
import Select from "./component/Select"
import ProfileDetails from './component/ProfileDetails';

import { Routes,Route } from 'react-router';

// storing the api key here

export const config = {
  endpoint: `https://panorbit.in/api/users.json`
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Select />} />
      </Routes>

      <Routes>
        <Route path="/profiledetails/:id" element={<ProfileDetails />} />
      </Routes>
    </>
  );
}

export default App;
