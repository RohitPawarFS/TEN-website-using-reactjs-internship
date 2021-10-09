import React from "react";
import { ProfileAlumni } from './AlumniProfile';
import './AlumniTeam.css';

export default function AlumniTeam({profile}) {
    return (
        <div className="alumni-maindiv">
            <div style={{backgroundColor: 'Black'}}><h1 className="benefits-h1">Alumni Team</h1></div>
            
            <br />
            {ProfileAlumni.map((profile, iname) => {
                return (
                    <div key={iname} className="alumni-div">
                        <img className="alumni-img" src={profile.image} alt={profile.alt} />
                        <br/>
                        <a style={{color: 'Black'}}href={profile.link}><u>{profile.name}</u>​</a>
                    </div>
                );
            })}
        </div>
    );
}