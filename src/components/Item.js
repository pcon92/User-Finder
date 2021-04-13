import React from 'react'

const Item = ({
    first,
    last,
    age,
    img,
    gender,
    title,
    address,
    timezone,
    email,
    login,
    dateofbirth,
    registered,
    phone,
    mobile,
    id,
    nationality
}) => {

    return (
        <div className="user-details">
            <ul className="user-info">
                <li key={first}
                    className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            First name:
                        </div>
                        <div className="result">
                            {first} </div>
                    </div>
                </li>
                <li key={last}
                    className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            Surname:
                        </div>
                        <div className="result">
                            {last} </div>
                    </div>
                </li>
                <li key={age}
                    className="user-details-list-item">
                    <div className="result-line">
                        <div className="descriptor">
                            Age:
                        </div>
                        <div className="result">
                            {age} </div>
                    </div>
                </li>
            </ul>
            <div className="user-picture">
                    <img src={img} alt="user"></img>
            </div>

            <div className="supp-info-div supp-right">
                <li key={gender}
                    className="supp-info-list-item supp-info-gender hidden"
                    id="supp-info-gender"
                    name="gender">
                    <div className="result-line">
                        <div className="descriptor">
                            Gender:
                        </div>
                        <div className="result">
                            {gender} </div>
                    </div>
                </li>
                <li key={title}
                    className="supp-info-list-item supp-info-title hidden"
                    id="supp-info-title"
                    name="title">
                    <div className="result-line">
                        <div className="descriptor">
                            Title:
                        </div>
                        <div className="result">
                            {title} </div>
                    </div>
                </li>
                <li key={address}
                    className="supp-info-list-item supp-info-address hidden"
                    id="supp-info-address"
                    name="address">
                    <div className="result-line">
                        <div className="descriptor">
                            Address:
                        </div>
                        <div className="result">
                            {address} </div>
                    </div>
                </li>
                <li key={timezone}
                    className="supp-info-list-item supp-info-timezone hidden"
                    id="supp-info-timezone"
                    name="timezone">
                    <div className="result-line">
                        <div className="descriptor">
                            Timezone:
                        </div>
                        <div className="result">
                            {timezone} </div>
                    </div>
                </li>
                <li key={email}
                    className="supp-info-list-item supp-info-email hidden"
                    id="supp-info-email"
                    name="email">
                    <div className="result-line">
                        <div className="descriptor">
                            Email:
                        </div>
                        <div className="result">
                            {email} </div>
                    </div>
                </li>
                <li key={login}
                    className="supp-info-list-item supp-info-login hidden"
                    id="supp-info-login"
                    name="login">
                    <div className="result-line">
                        <div className="descriptor">
                            Login:
                        </div>
                        <div className="result">
                            {login} </div>
                    </div>
                </li>
                </div>
                <div className="supp-info-div supp-left">
                <li key={dateofbirth}
                    className="supp-info-list-item supp-info-dob hidden"
                    id="supp-info-dob"
                    name="dob">
                    <div className="result-line">
                        <div className="descriptor">
                            Date of Birth:
                        </div>
                        <div className="result">
                            {dateofbirth} </div>
                    </div>
                </li>
                <li key={registered}
                    className="supp-info-list-item supp-info-registered hidden"
                    id="supp-info-registered"
                    name="registered">
                    <div className="result-line">
                        <div className="descriptor">
                            Registered:
                        </div>
                        <div className="result">
                            {registered} </div>
                    </div>
                </li>
                <li key={phone}
                    className="supp-info-list-item supp-info-phone hidden"
                    id="supp-info-phone"
                    name="phone">
                    <div className="result-line">
                        <div className="descriptor">
                            Phone:
                        </div>
                        <div className="result">
                            {phone} </div>
                    </div>
                </li>
                <li key={mobile}
                    className="supp-info-list-item supp-info-mobile hidden"
                    id="supp-info-mobile"
                    name="mobile">
                    <div className="result-line">
                        <div className="descriptor">
                            Mobile:
                        </div>
                        <div className="result">
                            {mobile} </div>
                    </div>
                </li>
                <li key={id}
                    className="supp-info-list-item supp-info-id hidden"
                    id="supp-info-id"
                    name="id">
                    <div className="result-line">
                        <div className="descriptor">
                            ID:
                        </div>
                        <div className="result">
                            {id} </div>
                    </div>
                </li>
                <li key={nationality}
                    className="supp-info-list-item supp-info-nationality hidden"
                    id="supp-info-nationality"
                    name="nationality">
                    <div className="result-line">
                        <div className="descriptor">
                            Nationality:
                        </div>
                        <div className="result">
                            {nationality} </div>
                    </div>
                </li>

                </div>
        </div>
    );

}

export default Item;
