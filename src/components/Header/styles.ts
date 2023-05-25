import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    marginLeft: 'auto'
  },

  '@media (max-width: 575.98px)': {
    padding: '2rem',
  },
});
