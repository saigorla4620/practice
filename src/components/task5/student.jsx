import React from "react";
import { Layout, } from 'antd';
const { Header, Content } = Layout;
function Student() {
    return (
        <>
            <Header
                style={{
                    padding: 0,
                    backgroundColor: '#fff',
                    textAlign: 'center',

                }}

            >
                <h1>Students Data</h1>
            </Header>
            <Content
                style={{
                    margin: '24px 16px 0',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,

                        borderRadius: "25px",
                    }}
                >
                    <h1>Students</h1>


                </div>
            </Content>

        </>
    )
}
export default Student;