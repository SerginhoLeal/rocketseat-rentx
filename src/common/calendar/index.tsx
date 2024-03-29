import React from 'react';
import * as Native from 'react-native';
import * as Styles from './styles';

import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';

import { pt_br, generateInterval } from './constant';
import { CalendarProps, MarkedDateProps, DayProps } from './types';

LocaleConfig.locales['pt-br'] = pt_br
LocaleConfig.defaultLocale = 'pt-br';

const Calendar: React.FC<CalendarProps> = ({ markedDates, onDayPress }: CalendarProps) => {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={(direction) =>
        <Feather
          size={24} color={theme.colors.text} name={direction === 'left' ? 'chevron-left' : 'chevron-right'}  />
      }
      headerStyle={{
        backgroundColor: theme.colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10
      }}
      theme={{
        textDayFontFamily: theme.fonts.primary_400,
        textDayHeaderFontFamily: theme.fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: theme.fonts.primary_500,
        textMonthFontSize: 20,
        monthTextColor: theme.colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={`${new Date()}`}
      markingType="period"
      markedDates={markedDates}
      onDayPress={ onDayPress}
    />
  );
};

export {
  Calendar,
  DayProps,
  MarkedDateProps,
  generateInterval
}