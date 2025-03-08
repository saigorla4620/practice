import react from 'react';
import Foot from './footer';
import { Layout, } from 'antd';
import Tasks from './tasks';
import Student from './student';
import { Route,Routes } from 'react-router-dom';


function Menu(){
    return(
        <>
        <Layout>
        <Routes>
        <Route path="/" element={<Tasks/>}/>
        <Route path="/student" element={<Student/>}/>
        </Routes>

        <Foot/>
        </Layout>
        </>
    )
}
export default Menu;