import Announcement from '../components/Announcement';
import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </Container>
  );
};

export default Home;
