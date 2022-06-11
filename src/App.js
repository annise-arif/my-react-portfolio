import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home';
import Detail from './pages/Home/Project/Detail';
import Footer from './pages/Share/Footer';
import Header from './pages/Share/Header';
import NotFound from './pages/Share/NotFound';

function App() {
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='detail/:id' element={<Detail></Detail>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
