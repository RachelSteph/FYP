import React, { useState, useEffect } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import axios from "axios";
//https://stackoverflow.com/questions/51623836/how-do-i-download-a-pdf-file-onclick-with-react-pdf
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const Api = () => {
  const [projects, setProjects] = useState([]);
  const url = "http://127.0.0.1:8000/api/projects/";

  const accessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1NTI3MDIyLCJqdGkiOiI3MmIwNTliZWRiZDI0MDRjOGQzNzUwZTcxNmI0Yjc0OSIsInVzZXJfaWQiOjF9.S00mGEmU-rwETWRVE53S_1iXG6_swwKn0-CcJIu_cu0";

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setProjects(response.data);
      });
  }, [url]);
};

const MyDoc = () => (
  <>
    <Document data={Api}>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>PROJECT TITLE: {}</Text>
          <Text></Text>
        </View>
        <View style={styles.section}>
          <Text>PROJECT DESCRIPTION</Text>
        </View>
      </Page>
    </Document>
  </>
);

function Report() {
  return (
    <div className="App">
      <PDFDownloadLink document={<MyDoc />} fileName="projects.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download Project Description now!"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default Report;
