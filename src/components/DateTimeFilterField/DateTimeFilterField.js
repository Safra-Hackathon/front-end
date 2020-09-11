import React from 'react';

import { KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import brLocale from 'date-fns/locale/pt-BR';

import Flex, { FlexColumn } from 'components/Flex';
import PropTypes from 'prop-types';
import useMobile from '../../hooks/useMobile';

const DateTimeFilterField = ({
  start, setStart, end, setEnd, onDateChange, loading,
}) => {
  const isMobile = useMobile();
  const getTimeFormat = () => (isMobile ? 'dd/MM/yy' : 'dd/MMMM/yyyy');

  const handleStartDateChange = async (value) => {
    setStart(value);
    await onDateChange(value, end);
  };

  const handleEndDateChange = async (value) => {
    setEnd(value);
    await onDateChange(start, value);
  };

  return (
    <>
      <Flex>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale}>
          <FlexColumn all="50%">
            <KeyboardDateTimePicker
              fullWidth
              label="Data Inicio"
              name="startDate"
              margin="normal"
              format={getTimeFormat(start, end)}
              value={start}
              onChange={(value) => handleStartDateChange(value)}
              disabled={loading}
            />
          </FlexColumn>
          <FlexColumn all="50%">
            <KeyboardDateTimePicker
              fullWidth
              label="Data Fim"
              name="endDate"
              margin="normal"
              format={getTimeFormat(start, end)}
              value={end}
              onChange={(value) => handleEndDateChange(value)}
              disabled={loading}
            />
          </FlexColumn>
        </MuiPickersUtilsProvider>
      </Flex>
    </>
  );
};

DateTimeFilterField.propTypes = {
  start: PropTypes.object.isRequired,
  setStart: PropTypes.func.isRequired,
  end: PropTypes.object.isRequired,
  setEnd: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default DateTimeFilterField;
