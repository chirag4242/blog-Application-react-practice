import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import AboutPage from './Page/AboutPage';
import ArticlePage from './Page/ArticlePage';
import ArticleListPage from './Page/ArticlesListPage';
import NavBar from './Page/NavBar'


function App()
{
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleListPage />} />
            <Route path="/articles/:articleID" element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
