import React from 'react'
import styles from '../../styles/Field.module.scss'
import {cards} from '../cards/cards'
import { useState } from 'react'
import classNames from 'classnames/bind';
import Card from './Card'


const Gamefield = () => {
    const [show,setShow] = useState({})

    const handleClick = (e) => {
            if(!e.currentTarget.classList.contains('Field_card_active__KDvwr')){
                setShow({id:e.currentTarget.id})
                const interval= setInterval(() => {
                    setShow({})
                },800)
            }
    }
  return (
    <div className={styles.field}>
        <div className={styles.container}>
            <div className={styles.game_field}>
                <div className={styles.game_field_row}>
                    {cards.map((item,idx) => (
                        <Card item={item} isActive={idx == show.id} handleClick={handleClick} idx={idx} key={idx} image={item.img} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gamefield
