import React from 'react'
import { Rate } from 'antd';

const Ratings = () => {
    return (
        <div>
            <Rate defaultValue={3} />
            <span className="ant-rate-text"></span>
    
        </div>
    )
}

export default Ratings


    
  
  



/*import React from 'react'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const Ratings = () => {
    const [value, setValue] = React.useState(0); 
    return (
        <div>
             Ratings read only
            <Box align="left" mb={1} borderColor="transparent">
                <Rating
                //value={props.reviewInfo.rating}
                name="rating"
                readOnly="true"
                />
            </Box>
        
            <div>
                ratings changeable
                <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
                <Rating
                    value={value}
                    name="rating"
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    fetch("http://127.0.0.1:8000/api/reviews/stars",{
                        method: "POST",
                        headers:{
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            stars: " "
                        })
                    }).then(response =>console.log(response));
                    
                    }}
                    //onClick={props.handleInputChange}
                    />
                </Box>
            </div>
        </div>
    )
}

export default Ratings;*/

