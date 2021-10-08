import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './styles/common.scss';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#51a351',
            contrastText: '#fff'
        }
    }
});

const App = () => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <ThemeProvider theme={theme}>
                <div className='wrap'>
                    123фывфывфывфыв
                    <span>REACT ASSEMBLY</span>
                </div>
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    );
};

export default App;
