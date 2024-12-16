import React from 'react';
import { Link } from 'react-router-dom';
import classes from './DetFeatures.module.css';
import AdvantageText from '../AdvantageText';
import Button from '../../../../components/Button'

function DetFeatures() {
    const images = [
        'q1.webp', 'q2.webp', 'q3.webp', 'q4.webp', 'q5.webp', 'q6.webp', 
    ];
    const text = [
        'Безопасность <br/> для автомобиля',
        'Комплексная <br/> защита',
        'Экономия <br/> средств',
        'Длительный <br/> эффект',
        'Высокое качество <br/> услуг',
        'Великолепный <br/> результат'
    ];

    const Block = ({ img, className, text }) => {
        return (
            <div className={`${classes.DetFeatures__block} ${className}`}>
                <img src={require(`../../img/${img}`)} alt='Преимущество' />
                <span className={classes.DetFeatures__block__title} dangerouslySetInnerHTML={text}></span>
            </div>
        );
    };

    return ( 
        <div className={classes.DetFeatures}>
            <AdvantageText subtitle='Услуги' title='Детейлинга автомобиля' />
            <div className={classes.DetFeatures__blocks}>
                {images.map((img, index) => (
                    <Block 
                        key={index} 
                        img={img}
                        className={`${classes.block} ${classes[`block_${index + 1}`]}`} 
                        text={{ __html: text[index] }}
                    />
                ))}
            </div>
						<Link style={{textDecoration: 'none'}} to='/help'><Button title='Закажите сейчас' className={classes.DetFeatures__btn}/></Link>
        </div>
    );
}

export default DetFeatures;