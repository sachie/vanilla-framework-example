import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import constants from 'utils/constants';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path={constants.paths.home} element={<Home />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
