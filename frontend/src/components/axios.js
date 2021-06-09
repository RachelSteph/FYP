import { Divider } from "antd";
import React from "react"
import { ThemeProvider } from "styled-components";

export default class Fetch extends React.Component{
    state = {
        loading: true,
        person : null,
    };
    async componentDidMount () {
        const url = "http://127.0.0.1:8000/api/clients/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0] , loading : false});

    }
    render() {
        if (this.state.loading) {
            
        } 
        if (!this.state.person){
           return <div>not available.. </div>
        }
        return(
            <div>
                { this.state.loading || !this.state.person ?( 
                <div>loading .. </div>): (

                 <div>
                    <div>{this.state.person.name.firstname}</div>
                    
                    <div>{this.state.person.name.lastname}</div>
                </div>
                )}
            </div>
            
        )
    }
}
