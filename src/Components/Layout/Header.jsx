import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/Images/meals.jpg'
import HeaderCardButton from '../UI/HeaderCardButton/HeaderCardButton'
const Header = () => {
  return (
    <>
        <header className={classes.header}>
            <h1>FoodHub</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt='A table full of food!' />
        </div>
    </>
  )
}

export default Header