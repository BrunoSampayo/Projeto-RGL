import * as C from "./Appstyled";
import {MoneyStats} from './components/MoneyStats'
export const App = ()=>{
  
  return(
    
    <>
    <C.header>
      <h1>RGLP</h1>
    </C.header>
    <C.container>
      <MoneyStats/>
    </C.container>
    
    </>
  )
}

export default App
