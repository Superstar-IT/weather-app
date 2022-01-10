import * as t from "../types";
import axios from "axios";
import Moment from 'moment';
import * as configuration from "../config";

export const getWeatherStatus = ( city, weatherDate ) => dispatch => {
    const dateOfView = Moment(weatherDate).format("YYYY-MM-DD");
    axios.get(configuration.weatherApi, {
        params: {
            key: configuration.weatherApiKey,
            q: city,
            dt: dateOfView,
        }
    }).then((res) => {
        const { data } = res;
        const { date, day } = data.forecast.forecastday[0];

        const climateData = {
            location: data.location.name,
            date,
            condition: day.condition,
            temperature: {
                high: day.maxtemp_c,
                low: day.mintemp_c,
                average: day.avgtemp_c,
            },
            wind: {
                maximum: day.maxwind_kph,
                average: day.avgvis_km,
            },
            humidity: day.avghumidity,
        }
        dispatch({
            type: t.SET_CLIMATE_STATUS,
            payload: climateData,
        }),
        dispatch({
            type: t.SET_ERROR,
            payload: ""
        })
    }).catch(err => {
        dispatch({
            type: t.SET_CLIMATE_STATUS,
            payload: ""
        }),
        dispatch({
            type: t.SET_ERROR,
            payload: "can not find it"
        })
    });
}