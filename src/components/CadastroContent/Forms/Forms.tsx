import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextContent } from './styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEC200', // Cor principal (linha, foco, etc.)
    },
    text: {
      primary: '#FFF',
    },
  },
});

const isValidEmail = (email: string): boolean => {
  // Regex para validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const formatPhone = (value: string): string => {
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return formattedValue;
};

export default function Forms() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleInputEmailChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setEmail(value);
    if (!isValidEmail(value)) {
      setEmailError('Por favor, insira um email válido');
    } else {
      setEmailError('');
    }
  };

  const handleInputNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFullName(value);

    // Exemplo de validação simples: Nome deve ter pelo menos 5 caracteres
    if (value.length < 5) {
      setNameError('Nome deve ter pelo menos 5 caracteres');
    } else {
      setNameError('');
    }
  };

  const handleInputPhoneChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setPhone(value);

    // Lógica de validação para o número de telefone
    const isValidPhone = /^(\([0-9]{2}\)\s?|[0-9]{2}\s?)[0-9]{5}-?[0-9]{4}$/;
    const isPhoneValid = isValidPhone.test(value);

    if (!isPhoneValid) {
      setPhoneError('Número de telefone inválido');
    } else {
      setPhoneError('');
    }
  };

  const HandleFormSubmit = () => {
    if (!nameError && !emailError && !phoneError) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = `https://docs.google.com/forms/d/e/1FAIpQLSfYwR1petegUsz_XolHKBguuWIR2kKN_Zeuog8XIbun9NGTIg/formResponse?entry.1281333293=${fullName}&entry.1906051504=${email}&entry.975664923=${phone}`;
      document.body.appendChild(iframe);
      alert('Inscrição Realizada com Sucesso!');
      setFullName('');
      setEmail('');
      setPhone('');
    } else {
      alert('Formulário contém erros.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3% 0',
          alignItems: 'center',
          backgroundColor: '#1C1C1E',
          borderRadius: '15px',
          '@media (max-width: 901px)': {
            width: '90%',
            marginBottom: '20px',
          },
        }}
      >
        <TextContent>
          <p>
            Bem-vindo a 1º edição do <span>Exclusive Imob</span> 2024
          </p>
          <p>
            Estamos felizes em tê-lo aqui. Para aproveitar todos os recursos e
            benefícios da nossa comunidade, por favor, preencha o formulário
            abaixo e inscreva-se.
          </p>
        </TextContent>
        <Box
          mt={4}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-name"
            placeholder="Nome Completo"
            value={fullName}
            onChange={handleInputNameChange}
            error={!!nameError}
            helperText={nameError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={handleInputEmailChange}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-phone"
            placeholder="Número de Telefone"
            value={formatPhone(phone)}
            onChange={handleInputPhoneChange}
            error={!!phoneError}
            helperText={phoneError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold' }}
            onClick={HandleFormSubmit}
          >
            INSCREVA-SE
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
