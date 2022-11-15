import { FC } from 'react';
import styled from 'styled-components'
import { AiOutlineLineChart } from 'react-icons/ai';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { GiPencilBrush } from 'react-icons/gi';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 380px;
  border-radius: 5px;
  padding: 25px;
  position: relative;
  height: 260px;

  h5 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary_dark_violet};
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.grayish_violet};
    font-weight: 500;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  .icon {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.primary_cyan};
    background: ${({ theme }) => theme.colors.primary_dark_violet};
    width: 70px;
    height: 70px;
    border-radius: 100%;
    margin-top: -60px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}
  }
`;

const StatisticsCard: FC<{
  icon: string;
  title: string;
  description: string;
  className?: string;
}> = ({ icon, title, description, className = '' }) => {
  const getIcon = () => {
    if (icon === 'chart') {
      return <AiOutlineLineChart />
    }
    if (icon === 'speed') {
      return <IoSpeedometerOutline />
    }
    if (icon === 'brush') {
      return <GiPencilBrush />
    }
  }

  return (
    <StyleContainer className={`${className}`}>
      <div className="icon">
        {getIcon()}
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </StyleContainer>
  )
}

export default StatisticsCard;
