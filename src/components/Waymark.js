import React from 'react';
import WaymarkA from '/img/assets/Waymarks/way_a.png';
import WaymarkB from '/img/assets/Waymarks/way_b.png';
import WaymarkC from '/img/assets/Waymarks/way_c.png';
import WaymarkD from '/img/assets/Waymarks/way_d.png';
import Waymark1 from '/img/assets/Waymarks/way_1.png';
import Waymark2 from '/img/assets/Waymarks/way_2.png';
import Waymark3 from '/img/assets/Waymarks/way_3.png';
import Waymark4 from '/img/assets/Waymarks/way_4.png';

export default function Role({children, value}) {
    let returnValue = '';
    switch(value){
        case 'A': returnValue = WaymarkA; break;
        case 'B': returnValue = WaymarkB; break;
        case 'C': returnValue = WaymarkC; break;
        case 'D': returnValue = WaymarkD; break;
        case '1': returnValue = Waymark1; break;
        case '2': returnValue = Waymark2; break;
        case '3': returnValue = Waymark3; break;
        case '4': returnValue = Waymark4; break;
    }
    return (
        <img src={returnValue} />
    );
}