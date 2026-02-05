import React from "react";
import {schoolInfo} from '../data/school';

function SchoolAbout() {
    return (
        <div>
            <h1>{schoolInfo.name}</h1>
            <p>{schoolInfo.description}</p>
            <p>Основана: {schoolInfo.established} год</p>
            <h2>Тренеры</h2>
            <ul>
                {schoolInfo.coaches.map(coach => (
                    <li key={coach.id}>
                        {coach.name} - опыт {coach.experience} лет
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SchoolAbout;