import React from "react";
import { competitions } from "../data/competitions";

function CompetitionsList() {
    return (
        <div>
            <h2>Соревнования</h2>
            <ul>
                {competitions.map(comp => (
                    <li key={comp.id} >
                        <strong>{comp.name}</strong> - {comp.date}, {comp.location}. Победитель {comp.topGymnast}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompetitionsList;