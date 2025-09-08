import { Route, Routes } from 'react-router-dom';
import { Room } from './components/Room';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Room />} />
    </Routes>
  );
};
