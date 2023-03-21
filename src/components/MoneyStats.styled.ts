import styled from "styled-components";

export const MoneyStats = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MoneyArea = styled.div`
    width: 500px;
    display: flex;
    justify-content: center;
    color: #000;
    background-color: #f8f8f0;
    padding: 20px;
    font-size: 32px;
    border-radius: 8px;
    box-shadow: 3px 1px 10px #555;
    margin: 10px;
`;

export const RentArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
   
    .lucro{
            background-color: #15d115;
        }
    .gasto{
            background-color: #ff0000;
        }

    div{
        margin: 10px;
        padding: 5px;
        background-color: crimson;
        width: 100%;
        height: 500px;
        font-size: 22px;
        border-radius: 8px;
        
        color: #fef;
        text-shadow: 1px 2px 4px #000;
        box-shadow: 3px 1px 10px  #555;
       
        
        h2{
            text-align: center;
        }
    }


`;