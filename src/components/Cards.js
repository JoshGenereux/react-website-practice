import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

const Cards = () =>{

  return(
    <div className='cards'>
      <h1>Check out these EPIC destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the amazon jungle'
              lable='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the islands of Bali in a private cruise'
              lable='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set sail in the Atlantic Ocean visiting Uncharted Waters'
              lable='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himalayan Mountains'
              lable='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-5.jpg'
              text='Drive through down town in a Luxury Super Car'
              lable='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
