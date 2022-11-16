import styled from 'styled-components'
import StatisticsCard from '../cards/StatisticsCard';

const StyleContainer = styled.div`
  
  .title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px;
    text-align: center;

    @media (max-width: 768px) {
      margin: 0;
    }

    h1 {
      font-size: 42px;
      margin-bottom: 12px;
      color: ${({ theme }) => theme.colors.dark_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 28px;
      }
    }
    p {
      color: ${({ theme }) => theme.colors.grayish_violet};
      font-family: ${({ theme }) => theme.font.primary};
      font-weight: 500;
      text-align: center;
      font-size: 15px;

      @media (max-width: 768px) {
      }
    }
  }

  .statistics-body {
    display: flex;
    width: 100%;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 120px 0;
      align-items: center;
    }

    .seperator {
      height: 8px;
      background: ${({ theme }) => theme.colors.primary_cyan};
      flex: 0.1;
      margin-top: 120px;
    }

    .card-1 {
      flex: 1;
    }
    .card-2 {
      flex: 1;
      margin-top: 45px;

      @media (max-width: 768px) {
        margin-top: 0;
      }
    }
    .card-3 {
      flex: 1;
      margin-top: 80px;

      @media (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
`;

const AdvancedStatistics = () => {

  const cards = [
    {
      id: "001",
      title: "Brand Recognition",
      icon: "chart",
      description: "Boost your recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content",
      class: "card-1"
    },
    {
      id: "002",
      title: "Detailed Records",
      icon: "speed",
      description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions",
      class: "card-2"
    },
    {
      id: "003",
      title: "Fully Customizable",
      icon: "brush",
      description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement",
      class: "card-3"
    },
  ]
  return (
    <StyleContainer>
      <div className='title-section'>
        <h1>Advanced Statistics</h1>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className='statistics-body'>
        {
          cards.map((card, i) => (
            <>
              <StatisticsCard
                key={card.id}
                className={card.class}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
              {i !== 2 && <div className="seperator" />}
            </>
          ))
        }
      </div>
    </StyleContainer>
  )
}

export default AdvancedStatistics;
