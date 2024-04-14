import React from 'react';
import HeadSection from './headSection/Index';
import Progress from '../../../components/Progress';
import Explanation from './Explanation';
import LastCourses from './LastCourses';


const Home = () => {
    return ( 
        <>
        <Progress/>
        <div>
            <HeadSection/>
            <Explanation/>
            <LastCourses/>
        </div>
        </>
     );
}
 
export default Home;