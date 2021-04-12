import React from 'react'

const DataOptions = () => {
    
    const changeOptions = (e) => {
        document.querySelectorAll('input[type=checkbox]').forEach(option => {
            let optionItems = document.getElementsByName(`${option.value}`)
            if (!option.checked) {
                optionItems.forEach(item => item.setAttribute("class", `supp-info-list-item supp-info-${option.value} hidden`))
            } else {
                optionItems.forEach(item => item.setAttribute("class", `supp-info-list-item supp-info-${option.value}`))
            }
        })
    }

    const SELECT_ALL_BTN = document.getElementById("select-all-btn");

    const selectAll = (e) => {
        e.preventDefault();
        if (SELECT_ALL_BTN.value === "Select All") {
        document.querySelectorAll('input[type=checkbox]').forEach(option => option.setAttribute("checked", "checked"));
        changeOptions();
            SELECT_ALL_BTN.value = "Deselect All"
        } else {
            document.querySelectorAll('input[type=checkbox]').forEach(option => option.removeAttribute("checked"));
            SELECT_ALL_BTN.value = "Select All"
            changeOptions();

        }
    }

    return (
        <form className="data-options-div">
            <legend>Supplementary information to display: </legend>
            <div className="data-options-outer">
                <div className="data-options-inner-left">
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="gender" onChange={changeOptions}/>
                        <label for="gender">Gender </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="title" onChange={changeOptions}/>
                        <label for="title">Title </label>
                    </div>
                        <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="address" onChange={changeOptions}/>
                        <label for="address">Address </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="timezone" onChange={changeOptions}/>
                        <label for="timezone">Timezone </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="email" onChange={changeOptions}/>
                        <label for="email">Email </label>
                    </div>
                        <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="login" onChange={changeOptions}/>
                        <label for="login">Login </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="dob" onChange={changeOptions}/>
                        <label for="dob">Date of Birth </label>
                    </div>
                        <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="registered" onChange={changeOptions}/>
                        <label for="registered">Registered </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="phone" onChange={changeOptions}/>
                        <label for="phone">Phone </label>
                    </div>
                        <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="mobile" onChange={changeOptions}/>
                        <label for="mobile">Mobile </label>
                    </div>
                        <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="id" onChange={changeOptions}/>
                        <label for="id">ID </label>
                    </div>
                    <div className="data-options-box-label-group">
                        <input type="checkbox" className="checkbox" name="supp_info" value="nationality" onChange={changeOptions}/>
                        <label for="nationality">Nationality </label>
                    </div>
                </div>
                <div className="data-options-inner-right">
                    <input className="btn" type="submit" value="Select All" onClick={selectAll} id="select-all-btn"/>
                </div>
            </div>
        </form>
    );

}

export default DataOptions;

/* 

    const changeOptions = (e) => {
        e.preventDefault();
        document.querySelectorAll('input[type=checkbox]').forEach(option => {
            if (!option.checked) {
                document.getElementById(`supp-info-${option.value}`).setAttribute("class", `supp-info-list-item supp-info-${option.value} hidden`);
            } else {
                document.getElementById(`supp-info-${option.value}`).setAttribute("class", `supp-info-list-item supp-info-${option.value}`);
            }
        })
    }
*/