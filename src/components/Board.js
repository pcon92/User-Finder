import React, { useState, useEffect } from 'react'


// Import components
import Item from './Item.js';
import Slider from './Slider.js';

const Board = () => {

    const [single, getSingle] = useState("");
    const [multi, getMulti] = useState("");

    const [user, getUser] = useState([]);

    const [sliderVal, getSliderVal] = useState(3);

    // API - https://randomuser.me/api

    const groupSize = sliderVal;


    const callNextUser = () => {
        // Change state to trigger use effect which calls userData
        getSingle(Math.random())
    }
    
    const callNextUserGroup = () => {
        getMulti(Math.random())
    }

    const getUserData = async (num) => {
        const data = await fetch(`https://randomuser.me/api?results=${num}&nat=au`);
        const dataJSON = await data.json();
        getUser(dataJSON.results);
    }

    useEffect(() => {
        getUserData(1)
    }, [single])

    useEffect(() => {
        getUserData(groupSize)
    }, [multi])


    return (
        <div>
            <div className="Board-top-section">
                <button onClick={callNextUser}>Call next user</button>
                <button onClick={callNextUserGroup}>Call next user group</button>
                <Slider 
                    sliderVal={sliderVal}
                    getSliderVal={getSliderVal}
                />
            </div>
            {user.map(user => (<Item 
            first={user?.name.first}
            last={user?.name.last}
            age={user?.dob.age}
            img={user?.picture.large}
        />))}
        </div>
    );

}

export default Board;

/*
*/