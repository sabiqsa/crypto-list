import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';
import BalanceChart from './BalanceChart';
import { useEffect, useState } from 'react';
import { coins } from '@/static/coins';
import Coin from './Coin';
import useWebSocketHook from '@/utils/useWebSocket';

const Portfolio = ({ sanityTokens }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const currencies = useWebSocketHook();
  const coinData = coins?.map((coin) => ({
    ...coin,
    priceRp: currencies?.[coin.key],
  }));

  useEffect(() => {
    const calculateTotalBalance = async () => {
      setWalletBalance(0);

      sanityTokens.forEach((coin) => {
        const rpPrice = parseInt(coin.rpPrice);
        const rpAmount = 1; // Assuming 1 RP (you should use the actual amount of RP associated with the coin)

        if (!isNaN(rpPrice) && rpAmount > 0) {
          const rpPricePerRP = rpPrice / rpAmount;
          setWalletBalance(rpPricePerRP);
        }
      });
    };

    if (sanityTokens?.length > 0) {
      calculateTotalBalance();
    }
  }, [sanityTokens]);

  return (
    <Wrapper>
      <Content>
        <Chart>
          <div>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {'Rp'}
                {walletBalance.toLocaleString('id-ID')}
              </BalanceValue>
            </Balance>
          </div>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0, color: '#0a0b0d' }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coinData?.map((coin) => (
                <div key={coin.name}>
                  <Coin coin={coin} currencies={currencies} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`;

const Balance = styled.div``;

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

const Table = styled.div`
  width: 100%;
`;

const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`;

const TableItem = styled.div`
  padding: 1rem 2rem;
`;

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
