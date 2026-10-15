import React from 'react';
import attack1 from '/img/assets/Signs/mark_tar1.png';
import attack2 from '/img/assets/Signs/mark_tar2.png';
import attack3 from '/img/assets/Signs/mark_tar3.png';
import bind1 from '/img/assets/Signs/mark_link1.png';
import bind2 from '/img/assets/Signs/mark_link2.png';
import bind3 from '/img/assets/Signs/mark_link3.png';
import ignore1 from '/img/assets/Signs/mark_stop1.png';
import ignore2 from '/img/assets/Signs/mark_stop2.png';

export default function Sign({children, sign}) {
    let returnValue = '';
    switch(sign){
        case 'attack1': returnValue = attack1; break;
        case 'attack2': returnValue = attack2; break;
        case 'attack3': returnValue = attack3; break;
        case 'bind1': returnValue = bind1; break;
        case 'bind2': returnValue = bind2; break;
        case 'bind3': returnValue = bind3; break;
        case 'chain1': returnValue = bind1; break;
        case 'chain2': returnValue = bind2; break;
        case 'chain3': returnValue = bind3; break;
        case 'ignore1': returnValue = ignore1; break;
        case 'ignore2': returnValue = ignore2; break;
        case 'stop1': returnValue = ignore1; break;
        case 'stop2': returnValue = ignore2; break;
    }
    return (
        <img src={returnValue} />
    );
}