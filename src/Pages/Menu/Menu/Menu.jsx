import React from 'react';
import { Helmet } from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import coverImg1 from '../../../assets/menu/dessert-bg.jpeg'
import coverImg2 from '../../../assets/menu/pizza-bg.jpg'
import coverImg3 from '../../../assets/menu/salad-bg.jpg'
import coverImg4 from '../../../assets/menu/soup-bg.jpg'


import UseMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = UseMenu();
    const offered = menu.filter((item) => item.category === "offered");
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const drinks = menu.filter((item) => item.category === "drinks");
    return (
        <div>
            <Helmet>
                <title>Tasty Trove | Menu</title>
            </Helmet>
            <Cover img = {menuImg} title='our menu'></Cover>


            <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>

            <MenuCategory items ={offered} title='offered' coverImg={coverImg2}></MenuCategory>
            <MenuCategory items={dessert} title='dessert' coverImg={coverImg1}> </MenuCategory>
            <MenuCategory items={soup} title='soup' coverImg={coverImg4}> </MenuCategory>
            <MenuCategory items={pizza} title='pizza' coverImg={coverImg2}> </MenuCategory>
            <MenuCategory items={salad} title='salad' coverImg={coverImg3}> </MenuCategory>
            <MenuCategory items={drinks} title='drinks' coverImg={coverImg1}> </MenuCategory>
            
        </div>
    );
};

export default Menu;