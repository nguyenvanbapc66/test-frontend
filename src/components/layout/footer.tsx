import styled from 'styled-components';

import { colors } from '../../settings/theme';
import { IconFacebook, IconYoutube, IconInstagram } from '../../assets/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear() - 1;

  return (
    <StyledFooter>
      <div className='footer--small'>
        <CompanyInfo>
          <h3>BASIC</h3>
          <p>(514) 904-9789</p>
          <p>Quebec, 3100 Boulevard</p>
          <p>de la Cote-Vertu</p>
        </CompanyInfo>

        <NavLinks>
          <NavItem>Titre 1</NavItem>
          <NavItem>Titre 2</NavItem>
          <NavItem>Titre 3</NavItem>
          <NavItem>Titre 4</NavItem>
          <NavItem>Titre 5</NavItem>
          <NavItem>Titre 6</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem>Nous contacter</NavItem>
        </NavLinks>

        <SocialLinks>
          <SocialIcon href='#' aria-label='Facebook'>
            <IconFacebook />
          </SocialIcon>
          <SocialIcon href='#' aria-label='Instagram'>
            <IconInstagram />
          </SocialIcon>
          <SocialIcon href='#' aria-label='YouTube'>
            <IconYoutube />
          </SocialIcon>
        </SocialLinks>

        <Copyright>© BASIC {currentYear}</Copyright>
      </div>

      <div className='footer--large'>
        <FooterLargeContent>
          <CompanyInfoLarge>
            <h3>BASIC</h3>
            <p>(514) 904-6789</p>
            <p>Quebec, 3100 Boulevard</p>
            <p>de la Cote-Vertu</p>
          </CompanyInfoLarge>

          <FooterNavColumns>
            <NavColumn>
              <NavItem>Titre 1</NavItem>
              <NavItem>Titre 2</NavItem>
              <NavItem>Titre 3</NavItem>
            </NavColumn>
            <NavColumn>
              <NavItem>Titre 4</NavItem>
              <NavItem>Titre 4</NavItem>
              <NavItem>Titre 5</NavItem>
            </NavColumn>
            <NavColumn>
              <NavItem>Titre 6</NavItem>
              <NavItem>Titre 7</NavItem>
            </NavColumn>
          </FooterNavColumns>

          <FooterBottom>
            <Copyright>© BASIC {currentYear}</Copyright>
            <SocialLinks>
              <SocialIcon href='#' aria-label='Facebook'>
                <IconFacebook />
              </SocialIcon>
              <SocialIcon href='#' aria-label='Instagram'>
                <IconInstagram />
              </SocialIcon>
              <SocialIcon href='#' aria-label='YouTube'>
                <IconYoutube />
              </SocialIcon>
            </SocialLinks>
          </FooterBottom>
        </FooterLargeContent>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  background-color: ${colors.secondary};
  color: white;
  width: 100%;
  z-index: 100;

  .footer--small {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
    padding: 2rem;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .footer--large {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const CompanyInfo = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.8;
  }
`;

const Copyright = styled.p`
  font-size: 0.8rem;
  margin: 0;
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid #ffffff4d;
`;

const FooterLargeContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const CompanyInfoLarge = styled(CompanyInfo)`
  text-align: left;
`;

const FooterNavColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

const NavColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  ${NavItem} {
    font-size: 1rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid #ffffff4d;

  ${Copyright} {
    padding-top: 0;
    border-top: none;
  }
`;
