import { Route } from 'react-router-dom';
import { PageHome, PageVector } from '../../pages';

export const routes = () => {
  return (
    <>
      <Route path="/" element={<PageHome />} />
      <Route path="/vector" element={<PageVector />} />
    </>
  );
};
