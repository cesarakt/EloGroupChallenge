import { v4 as uuid } from 'uuid';

export function newLead(item: any) {
  const blankLead = localStorage.getItem('leads');

  const leads = JSON.parse(blankLead!) || [];

  const newLeads = [
    ...leads,
    {
      id: uuid(),
      index: leads.length,
      ...item,
    },
  ];

  localStorage.setItem('leads', JSON.stringify(newLeads));
}
