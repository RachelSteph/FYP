import React from 'react'
import Searchappbar from '../components/Searchappbar'
import { Card, Col, Row } from 'antd';
import { Input} from 'antd';
import image from '../images/cyber.jpg';
import Image from '../images/businessplanning.jpg';
import CategoriesPage from '../components/Table';
//import CatTable from '../components/CatTable';


const { Search } = Input;
const { Meta } = Card;


const onSearch = value => console.log(value);
const Categories = () => {
    return (
        <div>
            <Searchappbar />
            <div className="wrapper" style = {{margin: 10, alignContent: 'center'}}>
                <div className="site-card-wrapper" style = {{alignContent: 'center', margin: 20}}>
                    <Row gutter={16} style = {{margin: 40, borderSpacing: 20}}>
                    <Col span={8} >
                        <Card style={{ width: 300 }}
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
                    <Col span={8} >
                        <Card style={{ width: 300 }}
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
               
               <CategoriesPage />
            </div>    

        </div>
    )
}

export default Categories



    



  

  