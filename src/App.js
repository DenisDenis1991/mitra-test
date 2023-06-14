/* eslint-disable no-unused-vars */

import {Routes, Route, HashRouter} from 'react-router-dom'
import { AppRoute } from './const';
import MainPage from './pages/main-page/main-page';
import Layout from './components/layout/layout';
import PostsPage from './pages/posts-page/posts-page';
import { useSelector } from 'react-redux';
import ErrorPage from './pages/page-not-found/page-not-found';
import AboutMe from './pages/about-me/about-me';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={AppRoute.Main} element = {<Layout />}>
          <Route index element = {<MainPage />} />
          <Route path={AppRoute.Posts} element = {<PostsPage />} />
          <Route path={AppRoute.NotFound} element = {<ErrorPage />} />
          <Route path={AppRoute.AboutMe} element = {<AboutMe />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
