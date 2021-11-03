import { useEffect, useState } from 'react';
import { getLeads } from '../../../services/lead-service';
import List from './List';

import './styles.css';

export default function Board() {
  const [allLeads, setAllLeads] = useState([]);

  function loadLeads() {
    const leads = getLeads();
    const leadsFirstPosition = leads.map((lead) =>
      lead.position === 0 ? lead : undefined
    );
    const leadsSecondPosition = leads.map((lead) =>
      lead.position === 1 ? lead : undefined
    );

    const leadsThirdPosition = leads.map((lead) =>
      lead.position === 2 ? lead : undefined
    );

    setAllLeads([leadsFirstPosition, leadsSecondPosition, leadsThirdPosition]);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <div className='board'>
      {allLeads.map((leads, index) => {
        return (
          <List cards={leads} key={index} position={index} loadLeads={loadLeads} />
        );
      })}
    </div>
  );
}
