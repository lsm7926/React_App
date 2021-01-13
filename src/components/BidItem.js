import React from 'react';
import styled from 'styled-components';

const BidItemBlock = styled.div`
    display: flex;
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
    }
    & + & {
        margin-top: 3rem;
    }
`;

const BidItem = ({Bid}) => {
    const {bidNtceNo, bidNtceNm} = Bid;
    return (
        <div>
        <BidItemBlock>
            <div className = "contents">
                {bidNtceNm} [{bidNtceNo}]
            </div>
        </BidItemBlock>
        </div>
    );
};

export default BidItem;
