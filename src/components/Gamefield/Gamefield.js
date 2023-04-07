import React from 'react'
import styles from '../../styles/Field.module.scss'
import {cards} from '../cards/cards'
import { useState } from 'react'
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

const Gamefield = () => {
    const [active,setActive] = useState()

    let card = cx({
        card:active,
        card_active:!active,
      });
    const handleClick = (e) => {
        console.log(e.currentTarget.id)
        if(e.currentTarget.classList.contains(card)){
            setActive(e.currentTarget.id)
        }
    }
  return (
    <div className={styles.field}>
        <div className={styles.container}>
            <div className={styles.game_field}>
                <div className={styles.game_field_row}>
                    {cards.map((item,idx) => (
                        <div onClick={handleClick} id={idx}>
                         <div className={styles.content}>
                             <div className={styles.back}>
                                 <div className={styles.back_content}>
                                     <strong>Hover Me</strong>
                                 </div>
                             </div>
                             <div className={styles.front}>
                                 <div className={styles.front_img}></div>
                             </div>
                         </div>
                     </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Gamefield
