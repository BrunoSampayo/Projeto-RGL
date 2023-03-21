import * as C from './MoneyStats.styled'
export const MoneyStats = ()=>{
    return(
        <C.MoneyStats>
            <C.MoneyArea><h3>Saldo</h3>
            </C.MoneyArea>
            <C.RentArea>
                <div><h3>Lucro</h3></div>
                <div><h3>Gastos</h3></div>
            </C.RentArea>
        </C.MoneyStats>
            
        
    )
}