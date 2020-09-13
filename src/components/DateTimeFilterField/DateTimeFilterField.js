import React from 'react';

import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import brLocale from 'date-fns/locale/pt-BR';

import Flex, { FlexColumn } from 'components/Flex';
import useMobile from '../../hooks/useMobile';
import { usePaybackContext } from '../../pages/SafraPaybackPage/PaybackProvider/PaybackProvider';

const DateTimeFilterField = () => {
  const {
    setStartDate, startDate, setEndDate, endDate, loading, onDateChange,
  } = usePaybackContext();
  const isMobile = useMobile();
  const getTimeFormat = () => (isMobile ? 'dd/MM/yy' : 'dd/MMMM/yyyy');

  const handleStartDateChange = async (value) => {
    setStartDate(value);
    await onDateChange(value, endDate);
  };

  const handleEndDateChange = async (value) => {
    setEndDate(value);
    await onDateChange(startDate, value);
  };

  return (
    <>
      <Flex>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
          <FlexColumn all="50%">
            <KeyboardDatePicker
              fullWidth
              label="Data Inicio"
              name="startDate"
              margin="normal"
              format={getTimeFormat(startDate, endDate)}
              value={startDate}
              onChange={(value) => handleStartDateChange(value)}
              disabled={loading}
            />
          </FlexColumn>
          <FlexColumn all="50%">
            <KeyboardDatePicker
              fullWidth
              label="Data Fim"
              name="endDate"
              margin="normal"
              format={getTimeFormat(startDate, endDate)}
              value={endDate}
              onChange={(value) => handleEndDateChange(value)}
              disabled={loading}
            />
          </FlexColumn>
        </MuiPickersUtilsProvider>
      </Flex>
    </>
  );
};

export default DateTimeFilterField;
