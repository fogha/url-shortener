import { FC } from 'react';
import styled from 'styled-components'
import { AiOutlineLineChart } from 'react-icons/ai';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { GiPencilBrush } from 'react-icons/gi';

const StyleContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 350px;
  border-radius: 5px;
  padding: 25px;
  position: relative;

  h5 {
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
    font-size: 40px;
    color: ${({ theme }) => theme.colors.primary_cyan};
    background: ${({ theme }) => theme.colors.primary_dark_violet};
    width: 70px;
    height: 70px;
    text-align: center;
    border-radius: 100%;
    margin-top: -60px;
    margin-bottom: 30px;
  }
`;

const BodyCard: FC<{
  icon: 'chart' | 'speed' | 'brush';
  title: string;
  description: string;
  className?: string;
}>= ({icon, title, description, className = ''}) => {
  return (
    <StyleContainer className={`bodyCard-container ${className}`}>
      <div className="icon">
        {icon === 'chart' && (<AiOutlineLineChart />)}
        {icon === 'speed' && (<IoSpeedometerOutline />)}
        {icon === 'brush' && (<GiPencilBrush />)}
      </div>
      <h5>{title}</h5>
      <p>{description}</p>
    </StyleContainer>
  )
}

export default BodyCard;
