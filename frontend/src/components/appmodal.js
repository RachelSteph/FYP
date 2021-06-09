import React from 'react'
import { Modal, Button } from 'antd';
import { Input, DatePicker, Space, Typography} from 'antd';

const Appmodal = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
 
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };
   const { TextArea } = Input;
   
   
    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    function onOk(value) {
            console.log('onOk: ', value);
    }
    const onappointment = () =>{
        fetch("http://127.0.0.1:8000/appointments/",{
            method: "POST",
            headers: {
                Authorization: "Token 9bc3036be027ac18cb813fad9e64e5944f9b1a50" ,
                "Content-type": "application/json"
            }
        })
       .then((data) => data.json())
       //.then((data) => setTableData(data))
    
        .catch((error) => {
        console.log("error from submitting: " + error);
      })};
    
    return (
        <>
            <Button type="primary" onClick={showModal}
            style= {{width: 150, margin: 30}}>
                Book an appointment
            </Button>
            <Modal
                style={{margin:10}}
                title="Appointments"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                
                <Typography style={{margin: 30}}>
                <h1>Book an appointment!</h1>
                
            </Typography>
            <Input placeholder="Enter Agency name" style= {{margin: 20}}/>
            <TextArea placeholder = "Describe the nature of the appointment"rows={4} style= {{margin: 20}}/>
            
            <DatePicker showTime onChange={onChange} onOk={onOk} style= {{margin: 20}} />
                
            
            <Button
                size="medium"
                style={{ backgroundColor: "lightblue" , width: 150, margin: 30}}
                onClick ={onappointment}
                >
                
                Submit Request
            </Button>
            </Modal>
    </>
    )
}

export default Appmodal;



