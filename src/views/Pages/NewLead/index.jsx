import { useState } from 'react';
import { useHistory } from 'react-router';

import Input from '../../Components/Input';
import Table from '../../Components/Table';
import Button from '../../Components/Button';

import './styles.css';

export default function NewLead() {
    const history = useHistory();
    const [opportunities, setOpportunities] = useState([]);
    const [newLeadData, setNewLeadData] = useState({
        nome: '',
        telefone: '',
        email: '',
        oportunidades: opportunities,
        position: 0
    });

    const [error, setError] = useState({});

    const valueInput = ev => setNewLeadData({
        ...newLeadData,
        [ev.target.name]: ev.target.value
    });

    function handleSubmit(ev) {
        ev.preventDefault();

        if (!validate()) {
            return
        }

        history.push('/leads')
        alert('Lead Cadatrado com Sucesso!')
    }

    function addOpportunity(name) {
        setOpportunities((prev) => {
            const isTrue = prev.includes(name);
            return isTrue ? prev : [...prev, name];
        });
    }

    function removeOpportunity(name) {
        setOpportunities((prev) => prev.filter((opp) => opp !== name));
    }

    function handleRowClick(data, { target }) {
        if (target instanceof HTMLInputElement) {
            const opportunity = data[1];

            target.checked ? addOpportunity(opportunity) : removeOpportunity(opportunity);
        }
    }

    function handleCheckOpportunities(ev) {
        ev.target.checked ? setOpportunities(['RPA', 'Produto Digital', 'Analytics', 'BPM'])
            : setOpportunities([]);
    }


function validate() {
    const errorMessage = {}

    if (!newLeadData.nome) {
        errorMessage.nome = 'Informe um nome'
    }
    if (!newLeadData.telefone) {
        errorMessage.telefone = 'Informe um telefone';
    }
    if (!newLeadData.email) {
        errorMessage.email = 'Informe um email';
    }
    if (!opportunities.length) {
        errorMessage.oportunidades = "Informe uma oportunidade";
    }

    return (
        Object.keys(errorMessage).length === 0
            ? true
            : setError(errorMessage)
    )
}

return (
    <>
        <div className='container-new-leads'>
            <div className='header-area'>
                <header className='header-new-lead'>
                    ELO<strong>GROUP</strong>
                </header>
                <h1>Novo Lead</h1>
            </div>

            <div>
                <form className='new-lead-form' onSubmit={handleSubmit}>
                    <div className='input-area'>
                        <Input
                            name='nome'
                            label='Nome *'
                            type='text'
                            value={newLeadData.nome}
                            onChange={valueInput}
                            error={error.nome}
                        />
                        <Input
                            name='telefone'
                            label='Telefone *'
                            type='tel'
                            value={newLeadData.telefone}
                            onChange={valueInput}
                            error={error.telefone}
                        />
                        <Input
                            name='email'
                            label='Email *'
                            type='email'
                            value={newLeadData.email}
                            onChange={valueInput}
                            error={error.email}
                        />
                    </div>
                    <div className='opportunity-area'>
                        <Table
                            className='table-lead'
                            label='Oportunidades *'
                            columns={[
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    onClick={handleCheckOpportunities}
                                />,
                                "",
                            ]}
                            rows={[
                                [
                                    <input
                                        name='opp-rpa'
                                        className='checkbox'
                                        type='checkbox'
                                        checked={opportunities.includes('RPA')}
                                        readOnly={true}
                                    />,
                                    'RPA',
                                ],
                                [
                                    <input
                                        name='opp-produto-digital'
                                        className='checkbox'
                                        type='checkbox'
                                        checked={opportunities.includes('Produto Digital')}
                                        readOnly={true}
                                    />,
                                    'Produto Digital',
                                ],
                                [
                                    <input
                                        name='opp-analytics'
                                        className='checkbox'
                                        type='checkbox'
                                        checked={opportunities.includes('Analytics')}
                                        readOnly={true}
                                    />,
                                    'Analytics',
                                ],
                                [
                                    <input
                                        name='opp-bpm'
                                        className='checkbox'
                                        type='checkbox'
                                        checked={opportunities.includes('BPM')}
                                        readOnly={true}
                                    />,
                                    'BPM',
                                ],
                            ]}
                            onRowClick={handleRowClick}
                        />
                        <span className='error'>{error.oportunidades}</span>
                        <Button
                            name='Salvar'
                            className='save-button'
                            type='submit'
                        />
                    </div>
                </form>
            </div>

        </div>
    </>
)
}