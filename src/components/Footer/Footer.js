import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+234 814 946 1716</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            gidiboye@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="">
          <a href="https://github.com/Aycozy " target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
            </a>
          </SocialIcons>         
          <SocialIcons href="">
          <a href="https://www.instagram.com/aycozy.dev/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size="3rem"/>
          </a>
          </SocialIcons>
          <SocialIcons href="">
          <a href="https://www.linkedin.com/in/gideon-oluwagbade-24475b150" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
            </a>
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
