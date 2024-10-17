import React from 'react';
import WhyChoose from '../components/WhyChoose';
import NeedADieselSolution from '../components/NeedADieselSolution';
import ProductCategories from '../components/ProductCategories';
import Hero from './../components/Hero';
import { Helmet } from 'react-helmet';

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home | Itech Persada Nusantara</title>
                <meta
                    name='description'
                    content="Indonesia's Top Choice for Quality Diesel and Automotive Spare Parts"
                />
                <meta
                    name='keywords'
                    content='diesel center pekanbaru, diesel part, indo teknik pekanbaru, itech persada nusantara'
                />
            </Helmet>
            <Hero />
            <ProductCategories />
            <WhyChoose />
            <NeedADieselSolution />
        </>
    );
}

export default HomePage;
