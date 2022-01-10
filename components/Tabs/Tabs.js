import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import { getWeatherStatus } from "../../store/actions/weatherAction";
const Tabs = (props) => {
    const [activeStatus, setActiveStatus] = useState(0);
    let cities = '';
    const { getWeatherStatus } = props
    useEffect(() => {
        getWeatherStatus(props.cityArray[activeStatus], props.weatherDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeStatus, props.weatherDate]);

    if (props.cityArray && props.cityArray.length >= 0){
        cities = props.cityArray.map((city, index)=>{
            return (
                <li key={index} onClick={() => setActiveStatus(index)} className={activeStatus == index ? "border-indigo-700 pt-3 rounded-t text-indigo-700 mr-12 font-bold text-base" : "text-gray-600 py-3 flex items-center mr-12 hover:text-indigo-700 cursor-pointer font-bold text-base"}>
                    <div className="flex items-center mb-3">
                        <span className="ml-1 font-normal">{city}</span>
                    </div>
                    {activeStatus == index && <div className="w-full h-1 bg-indigo-700 rounded-t-md" />}
                </li>
            );
        })
    }
    else {
        cities="loading..."
    }
    return (
        <div>
            <div className="xl:w-full xl:mx-0 h-12 hidden sm:block bg-white shadow rounded">
                <ul className="flex border-b px-5 ">
                    {cities}
                </ul>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = {
    getWeatherStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
