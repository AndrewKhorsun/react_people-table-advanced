import './App.scss';
import {
  Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { PeoplePage } from './components/PeoplePage/PeoplePage';
import { NotFound } from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className="App">
      <div className="tabs is-centered">
        <ul>
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  color: isActive ? 'blue' : '',
                };
              }}
            >
              Home Page

            </NavLink>
          </li>
          <li>
            <NavLink
              to="/PeoplePage"
              style={({ isActive }) => {
                return {
                  color: isActive ? 'blue' : '',
                };
              }}
            >
              People Page

            </NavLink>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<p className="title">Home Page</p>} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/PeoplePage">
          <Route index element={<PeoplePage />} />
          <Route path=":SLAG" element={<PeoplePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
