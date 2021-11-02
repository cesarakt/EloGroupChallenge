import Button from '../../Components/Button';
import Table from '../../Components/Table';

import './styles.css';

export default function Leads() {
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
                            onClick={() => alert('ola')}
                        />
                    </div>
                    <Table />
                </div>
            </div>
        </>
    )
}