
import React from 'react'

import { Input, DatePicker, Space, Typography, Button} from 'antd';


const Appointmentforms = () => {

    const { TextArea } = Input;
    const { RangePicker } = DatePicker;
   
    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    function onOk(value) {
            console.log('onOk: ', value);
    }


    return (
        <div style={{width:500}}>
            <Typography style={{margin: 30}}>
                <h1>Book an appointment!</h1>
                
            </Typography>
            <Input placeholder="Enter Agency name" style= {{margin: 20}}/>
            <TextArea placeholder = "Describe the nature of the appointment"rows={4} style= {{margin: 20}}/>
            
            <DatePicker showTime onChange={onChange} onOk={onOk} style= {{margin: 20}} />
                
            
            <Button
                size="medium"
                style={{ backgroundColor: "lightblue" , width: 150, margin: 30}}
               
                >
                
                Submit Request
            </Button>
        </div>
    )
}

export default Appointmentforms;
 








