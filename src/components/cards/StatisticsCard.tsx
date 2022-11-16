import { FC } from 'react';
import styled from 'styled-components'
import { IoBarChartOutline } from 'react-icons/io5';
import { BsSpeedometer } from 'react-icons/bs';
import { GiPencilBrush } from 'react-icons/gi';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 25px;
  position: relative;
  height: 260px;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  h5 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary_dark_violet};
    font-weight: 700;
    margin-bottom: 15px;
  }

  p {
    color: ${({ theme }) => theme.colors.grayish_violet};
    font-weight: 500;
    font-size: 14px;
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

    @media (max-width: 768px) {
      margin: -60px auto 30px auto;
    }
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
      return <IoBarChartOutline />
    }
    if (icon === 'speed') {
      return <BsSpeedometer />
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
