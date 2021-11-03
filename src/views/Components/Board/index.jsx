import { useEffect, useState } from "react";
import { getLeads } from "../../../services/lead-service";
import List from "./List";

import "./styles.css";

export default function Board() {
  const [allLeads, setAllLeads] = useState([]);

  function loadLeads() {
    const leads = getLeads();
    const leadsFirstStage = leads.map((lead) =>
      lead.stage === 0 ? lead : undefined
    );
    const leadsSecondStage = leads.map((lead) =>
      lead.stage === 1 ? lead : undefined
    );

    const leadsThirdStage = leads.map((lead) =>
      lead.stage === 2 ? lead : undefined
    );

    setAllLeads([leadsFirstStage, leadsSecondStage, leadsThirdStage]);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  return (
    <div className="board">
      {allLeads.map((leads, index) => {
        return (
          <List cards={leads} key={index} stage={index} loadLeads={loadLeads} />
        );
      })}
    </div>
  );
}
