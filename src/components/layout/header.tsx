import styled from 'styled-components';

import { IconArrowUpRight, IconCrosshair, IconFishing, IconHamburger, IconMountains } from '../../assets/icons';

import { bpEnum } from '../../settings/theme';
import { Button, Text } from '../common';

const Header = () => {
  return (
    <StyledHeader className='header'>
      <div className='header--small'>
        <div className='header-left'>
          <Text.xs color='white'>LOGO SAMPLE</Text.xs>
        </div>
        <div className='header-right'>
          <IconHamburger />
        </div>
      </div>

      <div className='header--large'>
        <div className='header--large-wrapper'>
          <div className='header-left'>
            <Text.xs color='white'>LOGO SAMPLE</Text.xs>
          </div>

          <div className='header-middle'>
            <Text.base weight='500' color='white'>
              Titre 1
            </Text.base>
            <Text.base weight='500' color='white'>
              Titre 2
            </Text.base>
            <Text.base weight='500' color='white'>
              Titre 3
            </Text.base>
            <Text.base weight='500' color='white'>
              Titre 4
            </Text.base>
          </div>

          <div className='header-right'>
            <IconMountains />
            <IconFishing />
            <IconCrosshair />
            <Button variant='solid' color='primary' className='header-right-button'>
              <Text.base color='white'>Contactez-nous</Text.base>
              <IconArrowUpRight fill='white' />
            </Button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  .header--small {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 3rem;
    color: white;
    background: rgba(86, 44, 44, 0.7);
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem); /* Added for Safari support */
    padding: 0.75rem 1rem;
    z-index: 10;
  }

  .header--large {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    width: 100%;
    min-height: 3rem;
    color: white;
    background: rgba(86, 44, 44, 0.7);
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem); /* Added for Safari support */
    z-index: 10;

    .header--large-wrapper {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .header-middle {
      flex: 1;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      .header-right-button {
        p {
          line-height: 1.5rem;
        }

        svg {
          rotate: 45deg;
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media (max-width: ${bpEnum('mobile')}) {
    .header--small {
      display: flex;
    }

    .header--large {
      display: none;
    }
  }
`;
