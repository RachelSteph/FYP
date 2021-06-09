import React, {useState, useEffect} from 'react';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from '@material-ui/data-grid';


function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function ExportSelectorGrid() {
    const [tableData, setTableData] = useState([]);
    

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/projects")
        
       .then((data) => data.json())
       .then((data) => setTableData(data))


    })
    const columns = [
        {field: 'project_startdate', headername: 'NAME', flex: 0.3},
        {field: 'project_enddate', headername: 'EMAIL', flex: 0.3},
        {field: 'project_description', headername: 'DESCRIPTION', flex: 0.3},
        {field: 'clientprofile', headername: 'ADDRESS', flex: 0.3},
    
        
    
    
    ];
  /*const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 4,
    maxColumns: 6,
  });*/

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        style={{height:'100%', marginLeft: 20, marginTop: 20}}
        rows={tableData}
        columns={columns}
        pageSize={10}
        autoHeight = {tableData}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}
