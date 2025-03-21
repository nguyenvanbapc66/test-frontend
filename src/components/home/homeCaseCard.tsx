import styled from 'styled-components';

import { IconArrowUpRight } from '../../assets/icons';
import { Image, Text, Button } from '../common';

import imageCase1 from '../../assets/images/image-case-1.png';

type HomeCaseCardProps = {
  disabledButton?: boolean;
};

const HomeCaseCard = ({ disabledButton }: HomeCaseCardProps) => {
  return (
    <StyledHomeCaseCard className='caseCard'>
      <div className='caseCard-image'>
        <Image src={imageCase1} alt='Case 1' fill />
      </div>
      <Text.sm variant='primary' weight='500'>
        Case titre
      </Text.sm>
      <Text.base variant='secondary' weight='500' className='caseCard-tagline'>
        Case sous titre
      </Text.base>
      <Text.md variant='tertiary'>Text</Text.md>
      {!disabledButton && (
        <Button variant='outlined' color='quinary' className='caseCard-button'>
          <Text.md variant='secondary' weight='500'>
            Forfait 2
          </Text.md>
          <IconArrowUpRight />
        </Button>
      )}
    </StyledHomeCaseCard>
  );
};

export default HomeCaseCard;

const StyledHomeCaseCard = styled.div`
  .caseCard-image {
    position: relative;
    width: 100%;
    aspect-ratio: 343 / 200;
    overflow: hidden;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .caseCard-tagline {
    padding: 0.5rem 0;
  }

  .caseCard-button {
    margin-top: 2rem;
  }
`;
