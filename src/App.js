// import {Container, Row, Col} from 'react-bootstrap';
// import DropDirectioExample from './componients/header/header';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { AppRoute } from './const';
import MainPage from './pages/main-page/main-page';
import Layout from './componients/layout/layout';
import Posts from './pages/posts/posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPage />} />
          <Route path={AppRoute.Posts} element = {<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
