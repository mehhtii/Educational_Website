import React from 'react';
import Blog from './Blog/Blog';
import { Route, Routes } from 'react-router-dom';
import Home from './home';
import Progress from '../../components/Progress';


const Content = () => {
    return ( 
        <Routes>
            <Route path='*' element={<Progress/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
     );
}
 
export default Content;