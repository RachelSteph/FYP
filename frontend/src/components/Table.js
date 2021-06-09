import React, {useState, useEffect} from 'react'
import {DataGrid} from '@material-ui/data-grid';






const options = {
    filterType : 'checkbox',
}
const columns = [
    {field: 'name', headername: 'NAME', flex: 0.3},
    {field: 'email', headername: 'EMAIL', flex: 0.3},
    {field: 'description', headername: 'DESCRIPTION', flex: 0.3},
    {field: 'address', headername: 'ADDRESS', flex: 0.3},
    

    options, {
        filter: true
    }


];


const CategoriesPage = () => {
    const [tableData, setTableData] = useState([]);
    

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/agencies/agencies",{
            method: "GET",
            headers: {
                Authorization: "Token 9bc3036be027ac18cb813fad9e64e5944f9b1a50" ,
                "Content-type": "application/json"
            }
        })
       .then((data) => data.json())
       .then((data) => setTableData(data))
    });


    
    

   
    return (
        <div>  
                      
                        <div style={{ display: 'flex', height: '100%' }}>
                            <div style={{ flexGrow: 1 }}>
                                <DataGrid 
                                    //tableData={search(tableData)}  
                                    style={{height:'100%', marginLeft: 20, marginTop: 20}}
                                    rows={tableData}
                                    columns={columns}
                                    pageSize={10}
                                    autoHeight = {tableData}
                                    

                                    
                                    >
                                </DataGrid>

                        
                            </div>   
                        </div>       
                    
                
        </div>
    );
};

export  default CategoriesPage;