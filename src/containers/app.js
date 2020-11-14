import React, {useState,useEffect } from "react";
import CardList from "../components/cardList";
import SearchBox from "../components/searchbox";
import Scroll from "../components/scroll";
import "./app.css";

function App (){

  const [robots,setRobots] = useState([])
  const [searchfield,setSearchfield] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
  },[])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredRobots = robots.filter( robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    });

    if (robots.length === 0) {
      return <h1>Loading</h1>;
    } 
    else {
      return (
        <div className="tc">
          <h1 className="f2">ROBOFRIENDS</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
 

export default App;
