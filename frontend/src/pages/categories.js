import React from 'react';
import { Card, Col, Row, PageHeader } from 'antd';
//import { Input} from 'antd';
import image from '../images/cyber.jpg';
import Image from '../images/businessplanning.jpg';
import CategoriesPage from '../components/Table';
import CatTable from '../components/CatTable';
//import CatTable from '../components/CatTable';


//const { Search } = Input;
const { Meta } = Card;


//const onSearch = value => console.log(value);
const Categories = () => {
    return (
        <div>
            <PageHeader title="Categories" style={{backgroundColor: 'lightgreen', height: 50, padding: 10}}/>
            <div className="wrapper" style = {{margin: 10, alignContent: 'center'}}>
                <div className="site-card-wrapper" style = {{alignContent: 'center', margin: 20}}>
                    <Row gutter={24} style = {{margin: 40, borderSpacing: 20}}>
                    <Col span={12} >
                        <Card style={{ width: 200 }}
                            cover={
                            <img
                            alt="Information Technology"
                            src={require('../images/cyber.jpg').default}
                            />
                            }>
                            <Meta
                            title="Information Technology"
                            description="Discover Experts in Information Technology"
                            />
                        </Card>
                    </Col>
                    <Col span={12} >
                        <Card style={{ width: 200 }}
                            cover={
                            <img
                            alt="Business Planning"
                            src={require('../images/businessplanning.jpg').default}
                            />
                            }>
                            <Meta
                            title="Business Planning"
                            description="Discover Experts in Business Planning"
                            />
                        </Card>
                    </Col>
                    </Row>
                </div>
               
               <CatTable />
            </div>    

        </div>
    )
}

export default Categories



    



  

  