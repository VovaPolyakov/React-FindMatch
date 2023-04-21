import React from 'react'
import styles from '../../styles/Field.module.scss'
import classNames from 'classnames/bind';


const Card = ({expires,item,isActive,handleClick,image,idx}) => {
    let cx = classNames.bind(styles);
    let card = cx({
            card:  !isActive ,
            card_active: isActive,
    });
  return (
    <div className={card} onClick={handleClick}  id={idx}>
        <div className={styles.content}>
            <div className={styles.back}>
                <div className={styles.back_content}>
                    <strong>Hover Me</strong>
                </div>
            </div>
            <div className={styles.front}>
                <div className={styles.front_img}>
                    <p>{item.name}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
