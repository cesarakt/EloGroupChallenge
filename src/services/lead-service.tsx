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

export function getLeads() {
  const rawLeads: any = localStorage.getItem("leads");

  return JSON.parse(rawLeads) || [];
}

export function updateLead(newLead: any) {
  const leads = getLeads();

  const newLeads = leads.map((lead: any) =>
    lead.id === newLead.id ? newLead : lead
  );

  localStorage.setItem("leads", JSON.stringify(newLeads));
}
