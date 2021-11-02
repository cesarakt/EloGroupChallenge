import Card from '../Card';

import './styles.css';

export default function List({ position }) {
    const titles = [
        'Cliente em Potencial',
        'Dados Confirmados',
        'Reunião Agendada'
    ];

    const renderTitle = <div className='title-list'>{titles[position]}</div>

    return (
        <>
            <div className='table-list'>
                {renderTitle}
                <Card content={'Conteúdo'}/>
            </div>

        </>
    )
}
