import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  section: {
    flexGrow: 1
  }
});

const ReportGenerator = () => {
  
  const url ='http://127.0.0.1:8000/api/projects/';
  const [projects, setProjects] = useState([]);
  const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0';

  

  useEffect(()=>{
        axios.get(url,
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            .then(response => {
                setProjects(response.data)
            })
    }, [url])

  return (
    <div>
        <Document>
            <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                
                <Text>{projects.name}</Text>
            </View>
            <View style={styles.section}>
                
                <Text>{projects.description}</Text>
                <Text>{projects.status}</Text>
            </View>
            </Page>
        </Document>
    
        
      
        
    </div>
  )
}

export default ReportGenerator;











  