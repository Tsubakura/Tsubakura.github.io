import React from 'react';
import MT from '/img/assets/00_ROLE/MT.png';
import ST from '/img/assets/00_ROLE/ST.png';
import OT from '/img/assets/00_ROLE/OT.png';
import H1 from '/img/assets/00_ROLE/H1.png';
import H2 from '/img/assets/00_ROLE/H2.png';
import D1 from '/img/assets/00_ROLE/D1.png';
import D2 from '/img/assets/00_ROLE/D2.png';
import D3 from '/img/assets/00_ROLE/D3.png';
import D4 from '/img/assets/00_ROLE/D4.png';

export default function Raidwide({children, role}) {
    let returnValue = '';
    switch(role){
        case 'MT': returnValue = MT; break;
        case 'ST': returnValue = ST; break;
        case 'OT': returnValue = OT; break;
        case 'H1': returnValue = H1; break;
        case 'H2': returnValue = H2; break;
        case 'D1': returnValue = D1; break;
        case 'D2': returnValue = D2; break;
        case 'D3': returnValue = D3; break;
        case 'D4': returnValue = D4; break;
    }
    return (
        <img src={returnValue} />
    );
}