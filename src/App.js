import React, { useState } from 'react'
import "./App.css"
import Receipt from './Receipt';

function App() {

  const [namePerson, setNamePerson] = useState('');
  const [startingDate, setStartingDate] = useState('');
  const [endingDate, setEndingDate] = useState('');
  const [rent, setRent] = useState(123);
  const [address, setAddress] = useState('');
  const [nameOfLandlord, setNameOfLandlord] = useState('');
  const [showReceipts, setShowReceipts] = useState('none');
  const [ numOfMonths , setNumOfMonths ] = useState( [ new Date() , new Date() ] );

  const numberOfMonths = () => {
    var x = []
    for (var d = startingDate; d <= endingDate; d.setMonth(d.getMonth() + 1)) {
      if( d.getFullYear() === endingDate.getFullYear() && d.getMonth() === endingDate.getMonth() && d.getDate() < 15 ) break;
      console.log( 'working ' , d)
      var newd = {
        date: 1,
        month: d.getMonth(),
        year: d.getFullYear()
      };
      x.push( newd );
    }
    setNumOfMonths( x )
  }

  const handleInputNamePerson = (e) => { setNamePerson(e.target.value) }
  const handleInputstartingDate = (e) => {
    var newdate = new Date(e.target.value)
    setStartingDate(newdate)
  }
  const handleInputsendingDate = (e) => {
    var newdate = new Date(e.target.value)
    setEndingDate(newdate)
  }
  const handleInputRent = (e) => { setRent(e.target.value) }
  const handleInputAddress = (e) => { setAddress(e.target.value) }
  const handleInputLordland = (e) => { setNameOfLandlord(e.target.value) }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(namePerson, startingDate, endingDate, rent, address, nameOfLandlord)
    numberOfMonths()
    setShowReceipts('')
  }

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit} >
        <label htmlFor="preson" > Name of person </label><br />
        <input type="text" id="person" onChange={(e) => handleInputNamePerson(e)} /><br />

        <label htmlFor="Sdate" > Starting date </label><br />
        <input type="date" id="Sdate" onChange={(e) => handleInputstartingDate(e)} /><br />

        <label htmlFor="Edate" > End date </label><br />
        <input type="date" id="Edate" onChange={(e) => handleInputsendingDate(e)} /><br />

        <label htmlFor="rent" > Rent </label><br />
        <input type="number" id="rent" onChange={(e) => handleInputRent(e)} /><br />

        <label htmlFor="Address" > Address </label><br />
        <input type="text" id="Address" onChange={(e) => handleInputAddress(e)} /><br />

        <label htmlFor="Landlord" > Name of Landlord </label><br />
        <input type="text" id="Landlord" onChange={(e) => handleInputLordland(e)} /><br />

        <input type="submit" value="Submit" id = "submit" /><br />
      </form>
 
      <div style={{ display: `${showReceipts}` }} >

        { console.log( numOfMonths )}
        <ul style = {{listStyle: "none"}} >
          {numOfMonths.map((d) => {
            return <li> 
                <Receipt 
                  date = { d.date } 
                  month = {d.month } 
                  year = {d.year}
                  nameOfPerson = {namePerson}
                  rent = {rent}  
                  address = {address}
                  nameOfLandlord = {nameOfLandlord}
                 />
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default App