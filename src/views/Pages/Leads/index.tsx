import { useHistory } from 'react-router';

import { Button, Hero, Container, Column, Box } from 'rbx';

import { Logo } from '../../Components/Logo';
import Board from '../../Components/Board';

import './styles.css';

export default function Leads() {
  const history = useHistory();

  function handleNewLead() {
    history.push('/newLead')
  }

  return (
    <Hero size="fullheight">
      <Hero.Body>
        <Container>
          <Column.Group centered>
            <Column size={6}>
              <Box>

                <div className='header-area'>
                  <Logo />
                  <h1 className='title'>Painel de Leads</h1>
                </div>

                <div className='lead-panel'>
                  <div className='button-area'>
                    <Button color="info" type="submit" onClick={handleNewLead}>
                      Novo Lead (+)
                    </Button>
                  </div>
                  <Board />
                </div>
              </Box>
            </Column>
          </Column.Group>
        </Container>
      </Hero.Body>
    </Hero>
  );
};
