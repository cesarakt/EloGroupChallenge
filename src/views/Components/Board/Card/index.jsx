import { useDrag } from "react-dnd";

import "./styles.css";

export default function Card({ lead = {} }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: lead,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div className={`card ${isDragging && `dragging`}`} ref={dragRef}>
      {lead.name}
    </div>
  );
}
