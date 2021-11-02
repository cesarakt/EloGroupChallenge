import { useHistory } from 'react-router';

import Button from '../../Components/Button';
import Board from '../../Components/Board';

import './styles.css';

export default function Leads() {
    const history = useHistory();

    function handleNewLead(){
        history.push('/newLead')
    }

    return (
        <>
            <div className='container-leads'>
                <div className='header-area'>
                    <header className='header-lead'>
                        ELO <strong>GROUP</strong>
                    </header>
                    <h1 className='title'>Painel de Leads</h1>
                </div>

                <div className='lead-panel'>
                    <div className='button-area'>
                        <Button
                            className='button-lead'
                            name='Novo Lead (+)'
                            onClick={handleNewLead}
                        />
                    </div>
                    <Board />
                </div>
            </div>
        </>
    )
}