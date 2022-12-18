import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    
    background-color: black;
    color: white;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <h2><b>Rookie</b> webpage</h2>
        </FooterContainer>
    );
};

export default Footer;
