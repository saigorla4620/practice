import React from "react";
 import useUserData from "../task2/fetch";
 import { Space, Table, Tag } from 'antd';
import Button from "./button";
import { Link } from "react-router-dom";
const { Column, ColumnGroup } = Table;
function Users(){
     const { data, loading, error, addUser, updateUser, deleteUser }= useUserData()
     console.log("data",data)
    //  Columns = [
    //     {
    //         title:"ID",
    //         dataIndex:'id',
    //         key:'id'
    //     }
    //  ]
    return (
        <>
        <h1>users</h1>
        <div>
    <Table /*columns={Columns}*/ dataSource={data}>
    <Column title="Id" dataIndex="id" key="id" />
    <Column title="Name" dataIndex="name" key="Name" />
    <Column title="User Name" dataIndex="username" key="UserName" />
    <Column title="Email" dataIndex="email" key="Email" />
    <Column title="Phone" dataIndex="phone" key="phone" />
    <Column title="Address" dataIndex="address" key="address" render={(address)=>address.city}/>
    <Column title="Comapny" dataIndex="company" key="company" render={(company)=>company.name}/>
    <Column
      title="Action"
      key="action"
      render={(data) => (
        <Space size="middle">
         <Link to="/adduser"><Button type="Add" style={{color:"Black",bgcolor:"green",width:"150px",padding:"10px",border:"none",raduis:"10px"}}/></Link>
          <Link to={`/update/${data.id}`}><Button type="Update" style={{color:"green",bgcolor:"yellow",width:"150px",padding:"10px",border:"none",raduis:"10px"}}/></Link>
        <Button type="Delete" action={()=>deleteUser(data.id)}  style={{color:"white",bgcolor:"red",width:"150px",padding:"10px",border:"none",raduis:"10px"}}/>
        </Space>
      )}
    />
  </Table>
        </div>
          
        </>
    )
}
export default Users;