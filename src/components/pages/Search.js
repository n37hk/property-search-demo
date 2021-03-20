import React from 'react';
import './Search.css';
import '../../App.css';
import { Navbar } from '../Navbar';
import SearchBar from '../SearchBar';
import { ResultCard } from '../ResultCard';
import ReactDOM from 'react-dom';
import Axios from 'axios';

function Search(props){
    const dbServerAddress = "http://ec2-52-66-15-195.ap-south-1.compute.amazonaws.com/get-property-list.php";

    const getResults =() => {
        let location = document.getElementById("location").value;
        let type = document.getElementById("propertyType").value;
        Axios.post(dbServerAddress,
        {
            location: location,
            type: type
        })
        .then(({data}) => {
            if(data.success === 1){
                document.getElementById("resultSummary").innerHTML = "Total "+data.resultCount+" result(s) found";
                let results = data.propertyList;
                class First extends React.Component {                  
                    render() {
                        var listItems = results.map((property, index) => {
                            return (<ResultCard key={"property-"+index} language={props.language} area={property.Area} cost={property.Cost} bedrooms={property.Bedrooms} facilities={Object.keys(property).slice(4,16)}/>);
                        })
                        // console.log(listItems);
                        return (
                            <div>
                            {listItems}
                            </div>
                        );
                    }
                }
                ReactDOM.render(<First />, document.getElementById("results"));
            }
            else{
                alert(data.msg);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <>
        <div className="Search">
            <Navbar language={props.language}/>
            <SearchBar language={props.language} callfunction={getResults}/>
            <div className="search-results-container">
                <div className="result-cards-container" id="results">
                    
                </div>
            </div>
        </div>
        </>
    );
}

export default Search;
