import { FC } from 'react';
import { publicRoutes } from './routes';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((layout, indexLayout) => {
            const Layout = layout.element;

            return (
              <Route key={indexLayout} path={layout.path} element={<Layout />}>
                {layout.components.map((page, indexPage) => {
                  const Page = page.element;

                  return <Route key={indexPage} path={page.path} element={<Page />} />;
                })}
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
