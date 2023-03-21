import * as C from './MoneyStats.styled'
export const MoneyStats = ()=>{
    return(
        <C.MoneyStats>
            <C.MoneyArea><h3>2.000 R$</h3>
            </C.MoneyArea>
            <C.RentArea>
                <div className='lucro'><h2>Lucros</h2></div>
                <div className='gasto'><h2>Gastos</h2></div>
            </C.RentArea>
        </C.MoneyStats>
            
        
    )
}