import react from 'react';
import Layout from 'antd/es/layout/layout';
import Nav from './nav';
import { BrowserRouter } from 'react-router-dom';
import Menu from './menu';
function Application(){
    return(
        <>
        <div style={{height:"100vh"}}>
      <BrowserRouter>
      <Layout>
            <Nav/>
            <Menu/>
            
        
        </Layout>
      </BrowserRouter>

        </div>
       
        </>
    )
}
export default Application;