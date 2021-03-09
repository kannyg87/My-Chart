import styled from 'styled-components'

export const ChartDivImg = styled.div`
  height:70%;
  width:70%;
  
  margin:auto;
  background:#E1E8ED ;

`;
export const Img = styled.img`
  padding: 60px;
  width: 100%;
  height:auto;
  padding: 5px;
  background:#E1E8ED ;
  margin-left: auto;
  text-align: center;
`;

export const Paper = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0,0,0,1);
    transition: 0.3s;
    background-color:#f5f5dc;
    border-radius: 5px; /* 5px rounded corners */
    width:300px;
    height: ${props => props.height || "90px"};
    margin-left:auto;
    margin-right: auto;
    padding: 10px;
    font-family: "Lucida Console", "Courier New", monospace;
`;
