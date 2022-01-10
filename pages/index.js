import { useState } from 'react'
import { connect } from "react-redux"
import Tabs from '../components/Tabs';
import Modal from '../components/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function Home(props) {
  const { climateData, error } = props
  const [dateValue, onChangeDate] = useState(new Date());
  const city_array = ['New York', 'London', 'Berlin', 'Paris', 'Tokyo'];

  return (
    <div className="container mx-auto mt-10">
      <div className='grid gap-1 grid-cols-1 md:grid-cols-2'>
        <div>
          <Tabs cityArray={city_array} weatherDate={dateValue}></Tabs>
          <div className='mt-10'>
            { climateData &&
            <>
              <p>
                <span className='text-2xl font-bold mr-4'>{climateData?.location}</span>
                <span className='text-2xl'>{climateData?.date}</span>
              </p>
              { climateData?.condition &&
              <>
                <img src = {climateData?.condition?.icon}/>
                <span className='font-bold text-xl'>{climateData?.condition?.text}</span>
              </>
              }
              <p className='font-bold text-2xl mt-2'>Temperature</p>
              <ul className='list-disc ml-10'>
                <li><p>High: {climateData?.temperature ? climateData?.temperature.high : 'N/A'}&apos;C</p></li>
                <li><p>Low: {climateData?.temperature ? climateData?.temperature.low : 'N/A'}&apos;C</p></li>
                <li><p>Average: {climateData?.temperature ? climateData?.temperature.average : 'N/A'}&apos;C</p></li>
              </ul>
              <p className='font-bold text-2xl mt-2'>Wind</p>
              <ul className='list-disc ml-10'>
                <li><p>Maximum: {climateData.wind ? climateData.wind.maximum : 'N/A'}km/h</p></li>
                <li><p>Average: {climateData.wind ? climateData.wind.average : 'N/A'}km/h</p></li>
              </ul>
              <p className='font-bold text-2xl mt-2'>Humidity</p>
              <ul className='list-disc ml-10'>
                <li><p>Average: {climateData.humidity || 'N/A'}%</p></li>
              </ul>
            </>
            }
          </div>
        </div>
        <div>
          <div className="md:p-16 md:pb-12 p-5 dark:bg-gray-800 bg-white rounded-t ">
            <Calendar
                onChange={onChangeDate}
                value={dateValue}
            />
          </div>
          <Modal alertMessage={"Woops! It can show you the climate status for the last 7 days!"}></Modal>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
 return { 
   climateData: state.weatherReducer.climateData,
   error: state.weatherReducer.error
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)