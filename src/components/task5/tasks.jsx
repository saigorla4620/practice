import React, { useState } from "react";
import { Button, Descriptions, Layout, Modal } from 'antd';
import { Tabs } from 'antd';
import { Col, Row } from 'antd';


import TabPane from "antd/es/tabs/TabPane";
const { Header, Content } = Layout;
function Tasks() {
    const [modal1Open, setModal1Open] = useState(false);
    const [tasks, setTasks] = useState([{
        id: '',
        title: '',
        Descriptions: '',
        starttime: '',
        endtime: ''
    }])
    return (
        <>
            <Header className="header">
                <h1>Tasks Data</h1>
            </Header>
            <Content className="content">
                <div className="content-div">
                    <Tabs>
                        <TabPane tab="Add Task Here" key={1}>
                            <Row justify="end">
                                <Col span={6}>Hello</Col>
                                <Col span={6} offset={12}>
                                    <Button className="taskbtn" onClick={() => setModal1Open(true)}>Click Here To Add Task</Button>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Completed Tasks" key={2}>
                        </TabPane>
                    </Tabs>
                </div>
                <Modal
                    title="Add Task"
                    open={modal1Open}
                    onOk={() => setModal1Open(false)}
                    onCancel={() => setModal1Open(false)}
                >
                    <div className="Form">
                        <div>
                            <label>Title: </label>
                            <input type="text" name="title" />
                        </div>
                        <div class="input-field">
                            <label for="name"><span class="label-style">Full Name</span></label>
                            <input type="text" name="name"/>
                        </div>
                        <div>
                            <label name="desc">Description: </label>
                            <input type="text" name="desc" />
                        </div>
                        <div>
                            <label name="starttime">Start Time: </label>
                            <input type="time" name="starttime" />
                        </div>
                        <div>
                            <label name="starttime">Start Time: </label>
                            <input type="time" name="starttime" />
                        </div>
                        <label ></label>
                        <div>
                        </div>
                    </div>
                </Modal>
            </Content>
        </>
    )
}
export default Tasks