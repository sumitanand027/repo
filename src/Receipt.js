import React from 'react'

function Receipt( props ) {
    var mon =  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return (
        <div className = "card" >
            <h1 className = "receipt-heading" >RENT RECEIPT </h1>
            <p> { mon[ props.month]} {props.date}, {props.year}  </p>
            <p> Received sum of INR  <strong>  Rs.{props.rent} </strong> from {props.nameOfPerson} towards the rent of property located at {props.address} for the period from  <strong>  { mon[ props.month]} 01, {props.year} to { mon[ props.month]} 31, {props.year} </strong> </p>
            <p>  <strong> {props.nameOfLandlord} </strong> </p>
        </div>
    )
}

export default Receipt
