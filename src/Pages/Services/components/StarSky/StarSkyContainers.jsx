import React from 'react';
import classes from './StarSky.module.css';
import item1 from '../../img/item1.webp';
import item2 from '../../img/item2.webp';
import item3 from '../../img/item3.webp';
import item4 from '../../img/item4.webp';

function StarSkyContainers() {
	const starSkyBlocksData = [
		{
			image: item1,
			text: 'Возможность установки <br/> в дверных картах'
		},
		{
			image: item2,
			text: 'Возможность реализации <br/> "Млечного пути"'
		},
		{
			image: item3,
			text: 'Возможность сенсорного <br/> управления'
		},
		{
			image: item4,
			text: 'Собственные платы и <br/> блоки управления'
		}
	];

	const StarSkyBlock = ({ image, text }) => {
		return (
			<div className={classes.StarSkyBlock}>
				<div className={classes.img__block}>
					<img src={image} alt="StarSky Item" />
				</div>
				<div className={classes.text__block} dangerouslySetInnerHTML={{ __html: text }} />
			</div>
		);
	};

	return ( 
		<div className={classes.StarSkyContainers}>
			<div className={classes.StarSkyStars}></div>
			{starSkyBlocksData.map((block, index) => (
				<StarSkyBlock key={index} image={block.image} text={block.text} />
			))}
		</div>
	);
}

export default StarSkyContainers;