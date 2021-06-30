import React, { useEffect, useState } from "react";

const Reportpdf = () => {
   const [reports, setReports] = useState([]);
   
   useEffect(() => {
      const getAllReports = async () => {
         try {
            // Fetching movies in some way
         } catch (err) {
            console.log(`Error fetching movies: ${err}`);
         }
      };
      getAllReports();
   }, []);   return (
      <div>
         {/* TABLE HERE */}
         <div className="row">
            <button className="btn">
               Download Pdf
            </button>
         </div>
      </div>
   );
};export default Reportpdf;




























/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink } from "@react-pdf/renderer";

import ReportGenerator from "./reportgenerator";


export default function Report() {
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
    <div className="container">
      <PDFDownloadLink
        document={<ReportGenerator data={projects} />}
        fileName="report.pdf"
        style={{
          textDecoration: "none",
          padding: "10px",
          color: "#4a4a4a",
          backgroundColor: "#f2f2f2",
          border: "1px solid #4a4a4a"
        }}
      >
        
      </PDFDownloadLink>
    </div>
  );
}
*/
