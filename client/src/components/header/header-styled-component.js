import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
 
    background: black;
   
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 100%;
    display: inline-flex;
    padding: 20px;
    margin-bottom: 30px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionStyle = styled(Link)`
    padding: 10px 15px;
    font-size: 18px;
    color: white;
    cursor: pointer;
`;

export const StoreName = styled(Link)`
    font-size: 25px;
  
    letter-spacing: 1.2pt;
    padding-left: 20px;
   
    color: white;
    cursor:pointer;
    padding-bottom: 15px;
`;