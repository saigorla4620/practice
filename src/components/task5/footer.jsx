import react from 'react';
import Layout from 'antd/es/layout/layout';
const { Footer } = Layout;
function Foot(){
    return(
    <>
    <Footer
          style={{
            textAlign: 'center',
            backgroundColor: '#fff',
            
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by  Sai Gorla
    </Footer>
    </>
    )
}
export default Foot;