import { useDrop } from 'react-dnd';
import Card from '../Card';
import { v4 as uuid } from 'uuid';
import { updateLead } from '../../../../services/lead-service';

import './styles.css';

const titles = [
  'Cliente em Potencial',
  'Dados Confirmados',
  'Reunião Agendada',
];

export default function List({ cards = [], position, loadLeads }) {
  const [test, dropRef] = useDrop({
    accept: 'CARD',
    drop(item, monitor) {
      const diff = position - item.position;

      if (diff === 1) {
        updateLead({
          ...item,
          position: position,
        });
        loadLeads();
      }
    },
  });

  return (
    <div className='board-list' ref={dropRef}>
      {<div className='title-list'>{titles[position]}</div>}
      {cards.map((lead) => {
        return <Card lead={lead} key={lead?.id || uuid()} />;
      })}
    </div>
  );
}
