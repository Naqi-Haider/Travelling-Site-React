import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import Features from '../components/Features';
import Footer from '../components/Footer';
import '../styling/home.css';

const Home = () => {
  const showcaseData = [
    {
      image: '/img/showcase-photo3.jpg',
      title: 'DEGANVY, U.K',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit incidunt nulla a corporis eveniet pariatur maiores, id quis, totam dolore praesentium facere consequatur rem, fuga minus! Rerum, dolorem praesentium. Nemo?',
      reverse: false
    },
    {
      image: '/img/showcase-photo1.jpg',
      title: 'DESERT, EGYPT',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, amet ratione, quas laborum porro, explicabo vero ipsum laudantium nesciunt eos illum pariatur obcaecati fugiat asperiores nulla adipisci. Porro, atque itaque.',
      reverse: true
    }
  ];

  return (
    <>
      <Header />

      <section className='showcase'>
        <div className="container">
          {showcaseData.map((data, index) => (
            <Card
              key={index}
              image={data.image}
              title={data.title}
              description={data.description}
              reverse={data.reverse}
            />
          ))}
        </div>
      </section>

      <Features />

      <Footer />
    </>
  );
};

export default Home;