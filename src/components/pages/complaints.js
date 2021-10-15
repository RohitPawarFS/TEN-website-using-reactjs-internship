import React from 'react';
import './complaints.css';

export default function complaints() {
    return (
        <div className="complaints">
        <p className="comp" > COMPLAINTS </p>
        <div style={{ display: 'flex'}}>
            <p className="comp_p"><b>For any complaints regarding The Entrepreneurship Network(TEN)<br/>  please contact at our email address:
            <br/>hr.contact.ten@gmail.com</b></p>
            <div className="img-complaint">
                <img  src={require('../../images/img-complaint.png').default } alt="expert Teachers"/>
            </div>
        </div>
    </div>
    );
}