import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import config from './config';
import { publicRoutes } from './routes';
import NotFound from './pages/NotFound';

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
          <Route path={config.layouts.auth}>
            <Route index element={<Navigate to={config.routes.login} replace />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
