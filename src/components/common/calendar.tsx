import { DayPicker } from 'react-day-picker';
import styled from 'styled-components';

import { IconChevronLeft, IconChevronRight } from '../../assets/icons';
import { colors, bpEnum } from '../../settings/theme';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

const StyledCalendar = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <StyledDayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: 'calendar-months',
        month: 'calendar-month',
        caption: 'calendar-caption',
        caption_label: 'calendar-caption-label',
        nav: 'calendar-nav',
        nav_button_previous: 'calendar-nav-prev',
        nav_button_next: 'calendar-nav-next',
        table: 'calendar-table',
        head_row: 'calendar-head-row',
        head_cell: 'calendar-head-cell',
        row: 'calendar-row',
        cell: 'calendar-cell',
        day: 'calendar-day',
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_selected: 'day-selected',
        day_today: 'day-today',
        day_outside: 'day-outside',
        day_disabled: 'day-disabled',
        day_range_middle: 'day-range-middle',
        day_hidden: 'day-hidden',
        ...classNames,
      }}
      components={{
        IconLeft: () => <IconChevronLeft />,
        IconRight: () => <IconChevronRight />,
      }}
      {...props}
    />
  );
};

const StyledDayPicker = styled(DayPicker)`
  .calendar-months {
    border-radius: 1rem;
    border: 1px solid ${colors.quinary};
    padding: 1rem;
    box-shadow: 0 0 30px 0 #f2542d1a;
  }

  .calendar-month {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .calendar-caption {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .calendar-caption-label {
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.secondary};
  }

  .calendar-nav {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .calendar-nav-prev {
    position: absolute;
    left: 25%;
    cursor: pointer;
  }

  .calendar-nav-next {
    position: absolute;
    right: 25%;
    cursor: pointer;
  }

  .calendar-table {
    width: 100%;
    border-collapse: collapse;
  }

  .calendar-head-row {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
  }

  .calendar-head-cell {
    color: ${colors.secondary};
    width: 2.5rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 0.875rem;
  }

  .calendar-row {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .calendar-cell {
    /* width: 2.5rem;
    height: 2.375rem; */
    width: 142px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .calendar-day {
    /* width: 2.5rem;
    height: 2.375rem; */
    width: 142px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    /* font-size: 0.875rem; */
    font-size: 1.25rem;
    font-weight: 600;
    color: ${colors.secondary};
    border: 1px solid #d7d7d7;
    transition: all 0.2s;
    cursor: pointer;

    &:not(.day-outside):not(.day-disabled) {
      background-color: #fff4f1;
      border: 1px solid ${colors.primary};
    }
  }

  .day-selected {
    background-color: #fff4f1;
    border: 1px solid ${colors.primary};
    color: ${colors.secondary};
    border-radius: 0.5rem;

    &:hover {
      background-color: ${colors.primary};
      opacity: 0.9;
    }

    &:focus {
      background-color: ${colors.primary};
    }
  }

  .day-today {
    color: ${colors.primary};
    background-color: #fff4f1;
    border: 1px solid ${colors.primary};
  }

  .day-outside {
    color: #666;
    background: #f5f5f5;
    border: 1px solid #dfdfdf;
    opacity: 0.5;
  }

  .day-disabled {
    color: ${colors.quaternary};
    opacity: 0.7;
    background-color: #fff;
    border: 1px dashed #d7d7d7;

    &:hover {
      opacity: 0.5;
    }
  }

  .day-hidden {
    visibility: hidden;
  }

  @media (max-width: ${bpEnum('mobile')}) {
    .calendar-cell {
      width: 2.5rem;
      height: 2.375rem;
    }

    .calendar-day {
      width: 2.5rem;
      height: 2.375rem;
      font-size: 0.875rem;
    }
  }
`;

export default StyledCalendar;
