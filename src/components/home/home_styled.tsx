import { useState } from 'react';
import styled from 'styled-components';

import { Button, Text } from '../common';
import HomeCaseCard from './homeCaseCard';
import HomeMap, { Location } from './homeMap';

import bannerImage from '../../assets/images/image-banner.png';
import {
  IconMountains,
  IconCrosshair,
  IconFishing,
  IconPaperclip,
  IconSend,
  IconArrowUpRight,
  IconMountainsMapPin,
  IconFishingMapPin,
  IconCrosshairMapPin,
} from '../../assets/icons';
import { bpEnum, colors } from '../../settings/theme';
import CalendarStyled from '../common/calendar';
import { Footer } from '../layout';
import Scrollbars from 'react-custom-scrollbars-2';

// Sample location data - you can adjust coordinates based on your Figma map
const locations: Location[] = [
  {
    id: 1,
    name: 'Activité 1',
    coordinates: { x: 50, y: 39.5 },
    icon: <IconMountainsMapPin />,
  },
  {
    id: 2,
    name: 'Activité 2',
    coordinates: { x: 66.5, y: 49 },
    icon: <IconFishingMapPin />,
  },
  {
    id: 3,
    name: 'Activité 3',
    coordinates: { x: 38, y: 60.7 },
    icon: <IconCrosshairMapPin />,
  },
];

const HomeStyled = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <StyledHome className='home'>
      <Scrollbars
        universal={true}
        autoHide={true}
        autoHideTimeout={200}
        thumbMinSize={40}
        renderTrackVertical={(props) => <div {...props} className='scrollbar-track-vertical' />}
        renderThumbVertical={(props) => <div {...props} className='scrollbar-thumb-vertical' />}
      >
        <div className='home-banner'>
          <div className='home-banner-items'>
            <div className='home-banner-item'>
              <IconMountains />
              <Text.md weight='500' color='white'>
                Activité 1
              </Text.md>
            </div>
            <div className='home-banner-item'>
              <IconFishing />
              <Text.md weight='500' color='white'>
                Activité 2
              </Text.md>
            </div>
            <div className='home-banner-item'>
              <IconCrosshair />
              <Text.md weight='500' color='white'>
                Activité 3
              </Text.md>
            </div>
          </div>
        </div>

        <div className='home-content pt-10'>
          <Text.three_xl className='home-content-title' variant='primary' weight='600'>
            Titre
          </Text.three_xl>
          <Text.md className='home-content-subtitle' variant='tertiary'>
            Sous- titre
          </Text.md>

          <div className='home-content-cases'>
            <HomeCaseCard />
            <HomeCaseCard />
            <HomeCaseCard />
          </div>
        </div>

        <div className='home-content bg-senary'>
          <Text.three_xl className='home-content-title' variant='primary' weight='600'>
            Titre Bloc 2
          </Text.three_xl>

          <div className='home-content-buttons'>
            {locations.map((location) => (
              <Button variant='outlined' color='septenary' onClick={() => handleLocationClick(location)}>
                <IconMountains fill={colors.black} width={20} height={20} />
                <Text.md weight='500'>{location.name}</Text.md>
              </Button>
            ))}
          </div>

          <HomeMap
            locations={locations}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>

        <div className='home-content'>
          <Text.three_xl className='home-content-title' variant='primary' weight='600'>
            Nos activités
          </Text.three_xl>

          <div className='home-content-calendar'>
            <CalendarStyled disabled={[new Date('01/28/2025'), new Date('01/29/2025'), new Date('02/04/2025')]} />
          </div>

          <form className='home-content-form'>
            <div className='home-content-form-group'>
              <label htmlFor='name'>
                <Text.base variant='secondary'>Nom:</Text.base>
              </label>
              <input
                className='home-content-form-input'
                type='text'
                id='name'
                name='name'
                placeholder='Entrez votre nom'
              />
            </div>
            <div className='home-content-form-group'>
              <label htmlFor='email'>
                <Text.base variant='secondary'>Email:</Text.base>
              </label>
              <input
                className='home-content-form-input'
                type='email'
                id='email'
                name='email'
                placeholder='Entrez votre e-mail'
              />
            </div>
            <div className='home-content-form-group items-start'>
              <label htmlFor='message'>
                <Text.base variant='secondary'>Message:</Text.base>
              </label>
              <textarea
                className='home-content-form-textarea'
                id='message'
                name='message'
                placeholder='Entrez votre message'
              />
            </div>
            <div className='home-content-form-group items-start'>
              <label htmlFor='file'>
                <Text.base variant='secondary'>Fichier:</Text.base>
              </label>
              <div className='home-content-form-file'>
                <label htmlFor='file' className='home-content-form-file-button'>
                  <div>
                    <IconPaperclip />
                  </div>
                  <Text.base weight='500' color='#1E88F9'>
                    {file?.name ?? 'Choisir un fichier'}
                  </Text.base>
                </label>
                <Text.md color='#999999'>(*fichiers pdf uniquement)</Text.md>
                <input
                  className='home-content-form-file-input'
                  type='file'
                  id='file'
                  name='file'
                  style={{
                    visibility: 'hidden',
                  }}
                  onChange={handleFileChange}
                />
              </div>
            </div>

            <div className='home-content-form-button'>
              <Button variant='outlined' color='quinary'>
                <Text.base weight='500'>Clear All</Text.base>
              </Button>
              <Button variant='solid' color='primary'>
                <Text.base weight='500' variant='white'>
                  Envoyer
                </Text.base>
                <IconSend />
              </Button>
            </div>
          </form>
        </div>

        <div className='home-content'>
          <Text.three_xl className='home-content-title' variant='primary' weight='600'>
            Titre
          </Text.three_xl>

          <div className='home-content-food'>
            <HomeCaseCard disabledButton />
            <HomeCaseCard disabledButton />
            <HomeCaseCard disabledButton />
          </div>

          <Button variant='solid' color='primary' className='home-content-food-button'>
            <Text.base weight='500' variant='white'>
              Envoyer
            </Text.base>
            <IconArrowUpRight fill={colors.white} width={24} height={24} />
          </Button>
        </div>

        <Footer />
      </Scrollbars>
    </StyledHome>
  );
};

export default HomeStyled;

const StyledHome = styled.main`
  overflow: auto;
  height: 100vh;
  max-width: 1200px;
  margin-inline: auto;

  .home-banner {
    position: relative;
    height: 52.125rem;
    width: 100%;
    aspect-ratio: 1200 / 900;
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;

    .home-banner-items {
      position: absolute;
      bottom: 2.25rem;
      width: 100%;
      display: flex;
      justify-content: space-around;
      padding-top: 1.5rem;
      border-top: 1px solid #ffffff4d;

      .home-banner-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        p {
          font-size: 1.125rem;
        }
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }

  .home-content {
    padding: 2rem 1rem;

    &.pt-10 {
      padding-top: 2.5rem;
    }

    &.bg-senary {
      background-color: ${colors.senary};
    }

    .home-content-title {
      display: flex;
      align-items: center;
      font-size: 2.5rem;
      line-height: 3.75rem;

      &::before {
        content: '';
        flex: 1;
        border-top: 2px solid #bbbbbb;
        margin-right: 1rem;
      }

      &::after {
        content: '';
        flex: 1;
        border-top: 2px solid #bbbbbb;
        margin-left: 1rem;
      }
    }

    .home-content-subtitle {
      text-align: center;
      font-size: 1.25rem;
      line-height: 1.875rem;
      padding-top: 0.75rem;
    }

    .home-content-cases {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 1.25rem;
    }

    .home-content-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.5rem;
      margin: 1.25rem 1rem;

      button {
        p {
          font-size: 1.25rem;
          line-height: 1.25rem;
        }

        svg {
          width: 1.75rem;
          height: 1.75rem;
        }
      }
    }

    .home-content-calendar {
      margin-top: 2.5rem;
    }

    .home-content-form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 1.5rem;

      .home-content-form-group {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &.items-start {
          align-items: flex-start;
        }

        label {
          width: 20%;
        }

        .home-content-form-input {
          width: 80%;
          font-size: 0.875rem;
          line-height: 100%;
          padding: 0.625rem 1rem;
          border: 1px solid ${colors.quinary};
          border-radius: 50px;
          box-shadow: 0 0 30px 0 #f2542d1a;
          outline: 1px solid transparent;
          transition: all 0.15s ease-in-out;

          &::placeholder {
            color: #aaaaaa;
          }

          &:focus {
            outline: 1px solid ${colors.septenary};
          }
        }

        .home-content-form-textarea {
          width: 80%;
          min-height: 9.375rem;
          padding: 1rem;
          border-radius: 1rem;
          resize: vertical;
          font-family: inherit;
          font-size: 0.875rem;
          line-height: 1.5;
          border: 1px solid ${colors.quinary};
          color: ${colors.secondary};
          outline: 1px solid transparent;
          transition: all 0.15s ease-in-out;

          &::placeholder {
            color: #aaaaaa;
          }

          &:focus {
            outline: 1px solid ${colors.septenary};
          }
        }

        .home-content-form-file {
          width: 80%;
          height: 40px;

          .home-content-form-file-button {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            white-space: nowrap;
            margin-bottom: 0.25rem;
            cursor: pointer;
          }

          .home-content-form-file-input {
            visibility: hidden;
          }
        }
      }

      .home-content-form-button {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        margin-top: 1.5rem;

        button {
          width: 9rem;

          p {
            line-height: 1.375rem;
          }
        }
      }
    }

    .home-content-food {
      margin: 1.5rem 0;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .home-content-food-button {
      /* width: 100%; */
      width: fit-content;
      margin-inline: auto;

      p {
        line-height: 1.5rem;
      }

      svg {
        rotate: 45deg;
      }
    }
  }

  .scrollbar-track-vertical {
    top: 0.5rem;
    right: 0;
    bottom: 0.5rem;
    width: 1rem !important;
    background-color: transparent;
    z-index: 3;

    &::before {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0.375rem;
      bottom: 0;
      left: 0.375rem;
      border-radius: 0.375rem;
      background-color: #fff4f1;

      @media (max-width: ${bpEnum('mobile')}) {
        background-color: #fff4f1;
      }
    }
  }

  .scrollbar-thumb-vertical {
    z-index: 1;

    &::after {
      content: ' ';
      position: absolute;
      top: 0;
      right: 0.375rem;
      bottom: 0;
      left: 0.375rem;
      border-radius: 0.375rem;
      background-color: #562c2c;
    }
  }

  @media (max-width: ${bpEnum('mobile')}) {
    .home-banner {
      height: 50.75rem;

      .home-banner-items {
        .home-banner-item {
          svg {
            width: 1.5rem;
            height: 1.5rem;
          }

          p {
            font-size: 0.875rem;
          }
        }
      }
    }

    .home-content {
      .home-content-title {
        font-size: 1.5rem;
        line-height: 100%;

        &::before,
        &::after {
          border-top: 1px solid #bbbbbb;
        }
      }

      .home-content-subtitle {
        font-size: 0.875rem;
        line-height: 100%;
      }

      .home-content-cases {
        flex-direction: column;
        gap: 1.5rem;
      }

      .home-content-buttons {
        button {
          p {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }

          svg {
            width: 1.25rem;
            height: 1.25rem;
          }
        }
      }

      .home-content-form {
        .home-content-form-button {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;

          button {
            width: 50%;

            p {
              line-height: 1.375rem;
            }
          }
        }
      }

      .home-content-food {
        flex-direction: column;
      }

      .home-content-food-button {
        width: 100%;
      }
    }
  }

  @media (min-width: ${bpEnum('smallLaptop')}) {
    .scrollbar-track-vertical {
      width: 2rem !important;

      &::before {
        right: 0.5rem;
        left: 1rem;
        border-radius: 1rem;
      }
    }

    .scrollbar-thumb-vertical {
      &::after {
        right: 0.5rem;
        left: 1rem;
        border-radius: 1rem;
      }
    }
  }
`;
