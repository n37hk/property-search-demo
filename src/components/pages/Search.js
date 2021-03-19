import React from 'react';
import './Search.css';
import '../../App.css';
import { Navbar } from '../Navbar';
import SearchBar from '../SearchBar';
import ResultCard from '../ResultCard';
import ReactDOM from 'react-dom';

function Search(props){
    const mysql = require('mysql');

    const con = mysql.createConnection({
        host: "demodb.cvoyib7kpkc5.ap-south-1.rds.amazonaws.com",
        user: "admin",
        password: "demodb123"
    });

    const getResults =() => {
        let location = document.getElementById("location").value;
        con.connect(function(err) {
            con.query('SELECT * FROM demo.real_estate_mumbai WHERE Location="'+location+'"', function(err, result, fields) {
                if (err){
                    alert("Unable to get results");
                }
                if(result){
                    result.forEach(res => {
                        ReactDOM.render(
                            <ResultCard language={props.language} area={res.Area} cost={res.Cost} bedrooms={res.Bedrooms}/>,
                            document.getElementById("results")
                        )
                    });
                }
            });
            con.end();
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
