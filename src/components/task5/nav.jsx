import react from 'react';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

function Nav() {
    const menus =[
        {item:"Tasks",path:"/"},
        {item:"Student's",path:"/student"}]
    const items = menus.map(
        (item, index) => ({
            path: item.path,
            label: item.item,
        }),
    );
    return (
        <>
            <div>
                <Sider
                    style={{ height: "100vh" }}
                >
                    <div className="demo-logo-vertical" />
                    <Menu theme="dark" mode="inline" >
                        {
                            items.map((item)=>(
                                <Menu.Item>
                                    <Link to={item.path}>{item.label}</Link>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>
            </div>
        </>
    )
}
export default Nav;