import { v4 as uuid } from 'uuid';

export function createLead(item: any) {
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

export function getLeads() {
  const blankLead: any = localStorage.getItem("leads");

  return JSON.parse(blankLead) || [];
}

export function updateLead(newLead: any) {
  const leads = getLeads();

  const newLeads = leads.map((lead: any) =>
    lead.id === newLead.id ? newLead : lead
  );

  localStorage.setItem("leads", JSON.stringify(newLeads));
}
