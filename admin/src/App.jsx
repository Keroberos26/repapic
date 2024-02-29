import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';

const App = () => {
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
