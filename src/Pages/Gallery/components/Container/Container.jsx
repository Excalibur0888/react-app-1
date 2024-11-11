import React, { useState } from 'react';
import classes from './Container.module.css';
import InpageImg from '../../../../components/InpageImg/InpageImg';
import Title from '../../../../components/Title/Title';
import GalleryItem from '../GalleryItem/GalleryItem';
import items from '../GalleryItemData';
import Search from '../Search/Search';

function Container() {
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');
	const itemsPerPage = 10;
	const filteredItems = items.filter(item =>
		item.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
	const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
		setCurrentPage(1);
	};

	return (
		<div className={classes.gallery__container}>
			<InpageImg bg={require('../../img/BentleyBG.webp')} />
			<Title title='Наши' subtitle='Работы' className={classes.gallery__title} />
			<div className={classes.gallery__container__gray}>
				<Search onSearchChange={handleSearchChange} />

				{currentItems.map((text, index) => (
					<GalleryItem
						key={index}
						imgSrc={require(`../../img/item${startIndex + index + 1}.webp`)}
						text={text}
					/>
				))}
				<div className={classes.pagination}>
					{currentPage > 1 && (
						<span onClick={() => handlePageChange(currentPage - 1)} className={classes.arrow}>
							←
						</span>
					)}

					{Array.from({ length: totalPages }, (_, index) => (
						<span
							key={index}
							className={currentPage === index + 1 ? classes.active : ''}
							onClick={() => handlePageChange(index + 1)}
						>
							{index + 1}
						</span>
					))}

					{currentPage < totalPages && (
						<span onClick={() => handlePageChange(currentPage + 1)} className={classes.arrow}>
							→
						</span>
					)}
				</div>
			</div>
		</div>
	);
}

export default Container;
