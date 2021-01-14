import React from 'react';
import styled from 'styled-components';

const BidItemBlock = styled.tr`
    //display: flex;
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
        }
        p{
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
        td {
            border-style: solid;
            border-width: 1px;
            border-color: black;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const BidItem = ({Bid}) => {
    const {bidNtceNo, bidNtceNm, bidNtceOrd, dminsttNm, mainCnsttyNm, mainCnsttyPresmptPrce, cnstrtsiteRgnNm} = Bid;
    return (
        <tr>
            <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                {bidNtceNo}-{bidNtceOrd}
            </td>
            <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                {bidNtceNm}
            </td>
            <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
                {cnstrtsiteRgnNm}
            </td>
        </tr>
    );
};

export default BidItem;
