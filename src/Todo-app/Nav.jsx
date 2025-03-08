import React from "react";
import { Layout ,Menu} from "antd";
import { useNavigate } from "react-router-dom";
import Item from "antd/es/list/Item";
const { Header, Content, Footer, Sider } = Layout;

function Nav(){
    const navigate = useNavigate()
    const items =[{ key: "add-task", label: "Add Task", path: "/" },
    { key: "pending-task", label: "Pending Task", path: "/pending-task" },
    { key: "completed-task", label: "Completed Task", path: "/complete-task" }]
    return (
        <>
        <div>
        <Header
        style={{
          backgroundColor:'red',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
         
          mode="horizontal"
          items={items.map(({key,label,path})=>({
            key,
            label,
            onClick: () => navigate(path),
            
          }))

          }
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
        </div>
        </>
    )
}
export default Nav;