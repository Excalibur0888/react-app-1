import React, { useState, useEffect } from 'react';
import classes from './CarShowcase.module.css';
import CarShowcaseBtns from './CarShowcaseBtns';
import PromoMain from '../../../About/components/PromoMain';
import Modal from './Modal';

const titles = [
    'Замена масла и фильтров',
    'Ремонт и замена навесного оборудования',
    'Обслуживание тормозных систем и их тюнинг',
    'Тюнинг и обслуживание подвески',
    'Замена свечей зажигания и накаливания',
    'Изготовление и ремонт выхлопных систем',
    'Диагностика автомобиля',
    'Подбор запчастей',
    'Тюнинг, подбор и установка компонентов на автомобиль',
    'Ремонт двигателя и КПП'
];

const prices = [
    'от 1000 руб', 'от 2000 руб', 'от 1500 руб', 'от 1800 руб',
    'от 1300 руб', 'от 2200 руб', 'от 900 руб', 'от 1200 руб',
    'от 2500 руб', 'от 3000 руб'
];

const descriptions = [
    'Замена моторного масла и масляного фильтра — процедура, которую необходимо проводить регулярно, чтобы обеспечить двигателю Вашего автомобиля долгую жизнь и бесперебойную работу. Воздух, поступающий внутрь двигателя и смешивающийся с топливом и маслом, содержит частицы пыли и грязи и нуждается в очистке. Ее выполняет фильтрующий элемент, который периодически забивается.', 
		'Выполняем ремонт стартеров, генераторов любой сложности.', 
		'Тормозные диски изнашиваются со временем, агрессивная манера езды и неблагоприятные погодные условия могут существенно сократить срок службы, в результате чего тормозные диски придется заменить',
    'Сама по себе пружина отвечает за клиренс автомобиля и быстрый возврат колеса к опорной поверхности в движении. При этом пружину и амортизатор стоит воспринимать как единое целое, одна деталь без другой не имеет смысла и проектируют их под конкретную модель в паре.', 
		'Замена свечей зажигания – это несложная, но достаточно необходимая операция, и ее необходимо производить качественно и своевременно. Свечи зажигания — это один из расходных материалов, время износа которого на прямую зависит от эксплуатационных условий и качества используемого топлива.', 
		'Выхлопная система автомобиля — самая незащищенная часть авто. Она подвергается внешним воздействиям и нередко приходится её чинить. Поломка системы не просто неприятный стучащий звук и другие «прелести» а снижение мощности авто и дёрганье машины. Чтобы ваша выхлопная система функционировала должным образом, её, нужно систематически обслуживать и проверять.',
    'Диагностика автомобиля это процесс, при котором происходит чтение кодов возможных неисправностей на основных узлах, стирание этих кодов и последующая их коррекция. Для этого могут применяться как дилерские сканеры, так и прочие системы. Также проводим диагностику подвески автомобиля.', 
		'Осуществляется с использованием специального оборудования. Замена моторного масла и масляного фильтра — процедура, которую необходимо проводить регулярно, чтобы обеспечить двигателю Вашего автомобиля долгую жизнь и бесперебойную работу. Как часто это делать, указано в инструкции по эксплуатации автомобиля — рекомендуемый интервал устанавливает производитель.', 
		'Занимаемся подбором запчастей для увеличения мощности, улучшение устойчивости автомобиля на дороге, улучшение тормозных характеристик.',
    'Снятие двигателя и кпп с автомобиля производится, как правило, при необходимости замены или ремонта деталей кривошипно-шатунного механизма — блока цилиндров, его гильз, деталей поршневой группы (поршневых колец, поршней, поршневых пальцев), при ремонте или земене коленчатого вала и вкладышей его коренных и шатунных подшипников.'
];

function CarShowcase() {
    const [currentImage, setCurrentImage] = useState(0);
    const [modalData, setModalData] = useState(null);

    // Блокировка и разблокировка прокрутки
    useEffect(() => {
        if (modalData) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = ''; // Очистка при размонтировании
        };
    }, [modalData]);

    const handleMouseEnter = (index) => {
        setCurrentImage(index);
    };

    const handleButtonClick = (index) => {
        setModalData({
            title: titles[index],
            price: prices[index],
            description: descriptions[index],
            image: `serv${index + 1}.webp`
        });
    };

    const handleCloseModal = () => {
        setModalData(null);
    };

    return (
        <div className={classes.CarShowcase} style={{ backgroundImage: `url(${require(`../../img/${currentImage}.jpg`)})` }}>
            <CarShowcaseBtns onHover={handleMouseEnter} onClick={handleButtonClick} />
            <PromoMain />
            {modalData && (
                <>
                    <div className={classes.Overlay} onClick={handleCloseModal}></div>
                    <Modal data={modalData} onClose={handleCloseModal} />
                </>
            )}
        </div>
    );
}

export default CarShowcase;
