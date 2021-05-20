import React, { useState, useEffect, Component } from 'react';
import db from '../hooks/firestore';
import ApartmentList from "./ApartmentList";
import Map from "./PennMap";

function Matrix() { 
    return(
                <table class="table table-bordered table-hover table-condensed">
                    <colgroup>
                        <col span="1" style={{"width": "30%"}}/>
                        <col span="1" style={{"width": "10%"}}/>
                        <col span="1" style={{"width": "10%"}}/>
                        <col span="1" style={{"width": "10%"}}/>
                        <col span="1" style={{"width": "10%"}}/>
                        <col span="1" style={{"width": "10%"}}/>
                        <col span="1" style={{"width": "20%"}}/>
                    </colgroup>
                    <thead><tr><th title="Field #1">Apartment Complex Name</th>
                    <th title="Field #2">1BR (Studio)</th>
                    <th title="Field #3">1BR</th>
                    <th title="Field #4">2BR</th>
                    <th title="Field #5">3BR</th>
                    <th title="Field #6">4BR</th>
                    <th title="Field #11">Contact</th>
                    </tr></thead>
                    <tbody><tr>
                    <td>Room in on-campus high rise (no LR or KIT)</td>
                    <td>N/A</td>
                    <td>$1376¹</td>
                    <td>$1376¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    </tr>
                    <tr>
                    <td>Apartment with shared rooms in on-campus high rise (with LR and KIT)</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>$1376¹</td>
                    <td>N/A</td>
                    <td>$1376²</td>
                    <td>N/A</td>
                    </tr>
                    <tr>
                    <td>Apartment with individual rooms in on-campus high rise (with LR and KIT)</td>
                    <td>N/A</td>
                    <td>$1927¹</td>
                    <td>$1927¹</td>
                    <td>$1927²</td>
                    <td>$1927²</td>
                    <td>N/A</td>
                    </tr>
                    <tr>
                    <td>The Radian</td>
                    <td>N/A</td>
                    <td>$2399¹</td>
                    <td>$1899²</td>
                    <td>$1599²</td>
                    <td>     $1509² | $1,649⁴</td>
                    <td>(215) 222-4212</td>
                    </tr>
                    <tr>
                    <td>The Simon</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>$1899²</td>
                    <td>$1400³</td>
                    <td>$1,375</td>
                    <td>(215) 382-1300</td>
                    </tr>
                    <tr>
                    <td>4200 Ludlow Street</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>$950²</td>
                    <td>$1,321-$1,470²</td>
                    <td>N/A</td>
                    <td>855-205-0500</td>
                    </tr>
                    <tr>
                    <td>HAMCO</td>
                    <td>N/A</td>
                    <td>$2,235-$2,285¹</td>
                    <td>$1,637-$1,787²</td>
                    <td>N/A</td>
                    <td>$1,462-$1,537²</td>
                    <td>(215) 987-5953</td>
                    </tr>
                    <tr>
                    <td>Chestnut Hall Apartments</td>
                    <td>$1091¹</td>
                    <td>$1290¹</td>
                    <td>$1819¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(484) 469-7015</td>
                    </tr>
                    <tr>
                    <td>Luna on Pine</td>
                    <td>$1,385-1,750¹</td>
                    <td>$1,800-$2,000¹</td>
                    <td>$1270¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 966-8627</td>
                    </tr>
                    <tr>
                    <td>The Branden Apartments</td>
                    <td>$990¹</td>
                    <td>$1005¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 222-2000</td>
                    </tr>
                    <tr>
                    <td>Elizabeth Court</td>
                    <td>$1295¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 222-2000</td>
                    </tr>
                    <tr>
                    <td>The Hub</td>
                    <td>$1,195-$1,300¹</td>
                    <td>$1,195-$1,300¹</td>
                    <td>$1047-$1297¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(267) 990-9800</td>
                    </tr>
                    <tr>
                    <td>3737 (Korman)</td>
                    <td>N/A</td>
                    <td>$1979¹</td>
                    <td>$1597²</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 622-9883</td>
                    </tr>
                    <tr>
                    <td>The Chestnut</td>
                    <td>$1,952-$2,312¹</td>
                    <td>$2,121-$3,260 ¹</td>
                    <td>$1460-$3000²</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(833) 876-4829</td>
                    </tr>
                    <tr>
                    <td>Axis</td>
                    <td>$1,200-$1,300¹</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 662-0802</td>
                    </tr>
                    <tr>
                    <td>Domus</td>
                    <td>N/A</td>
                    <td>$2278¹</td>
                    <td>$1790²</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td>(215) 240-6202</td>
                    </tr>
                    </tbody>
                    </table>
        );
}

export default Matrix;
