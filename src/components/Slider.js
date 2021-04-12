import React from 'react'

const Slider = ({ sliderVal, getSliderVal }) => {

    const updateSliderVal = (e) => {
        getSliderVal(e?.target.value)
    }

    return (
        <div className="slider-container">
            <input type="range" min ="2" max="10" value={sliderVal} className="slider-input" id="slider-input" onChange={updateSliderVal} />
            <div className="slider-text-div">
                <div>Group Size:</div> 
                <div id="value-for-slider">
                    {document.getElementById("slider-input")?.value}
                </div>
            </div>
        </div>
    );

}

export default Slider;
