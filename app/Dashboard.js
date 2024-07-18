import Header from '@/components/header/Header';
import Main from '@/components/Main';
import Sidebar from '@/components/Sidebar';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  useEffect(() => {
    const getCoins = async () => {
      try {
        const response = await fetch(
          'https://ovpwyqcy.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22coins%22%5D%7B%0A++name%2C%0A++rpPrice%2C%0A++contractAddress%2C%0A++symbol%2C%0A++logo%2C%0A%7D',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch coins data');
        }
        const coins = (await response.json()).result;
        setSanityTokens(coins);
      } catch (error) {
        console.error('Error fetching coins data:', error);
      }
    };
    getCoins();
  }, []);
  return (
    <>
      <Wrapper>
        <Sidebar />
        <MainContainer>
          <Header walletAddress={address} />
          <Main sanityTokens={sanityTokens} walletAddress={address} />
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`;

const MainContainer = styled.div`
  flex: 1;
`;
