import React from 'react'

const Item = ({first, last, age, img}) => {


    return (
        <div className="user-details">
            <ul className="user-info">
                <li key={first} className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            First name:
                        </div>
                        <div className="result">
                            {first} 
                        </div>
                    </div>
                </li>
                <li key={last} className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            Surname:
                        </div>
                        <div className="result">
                            {last} 
                        </div>
                    </div>
                </li>
                <li key={age} className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            Age:
                        </div>
                        <div className="result">
                            {age} 
                        </div>
                    </div>
                </li>
            </ul>
            <div className="user-picture">
                <img src={img} alt="user"></img>
            </div>
        </div>
    );

}

export default Item;
