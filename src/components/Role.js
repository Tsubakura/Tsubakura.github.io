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
import Any from '/img/assets/00_ROLE/AnyRole.png';
import Tank from '/img/assets/00_ROLE/Tank.png';
import Melee from '/img/assets/00_ROLE/MeleeRole.png';
import Healer from '/img/assets/00_ROLE/Healer.png';
import Ranged from '/img/assets/00_ROLE/RangedRole.png';
import Support from '/img/assets/00_ROLE/Support.png';
import DPS from '/img/assets/00_ROLE/DPS.png';

export default function Role({children, role}) {
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
        case 'Any': returnValue = Any; break;
        case 'Tank': returnValue = Tank; break;
        case 'Melee': returnValue = Melee; break;
        case 'Healer': returnValue = Healer; break;
        case 'Ranged': returnValue = Ranged; break;
        case 'Support': returnValue = Support; break;
        case 'DPS': returnValue = DPS; break;
    }
    return (
        <img src={returnValue} width='36px' />
    );
}