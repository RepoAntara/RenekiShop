import './App.css';
import Navbar from './Aplication/components/navbar';
import { Provider } from 'react-redux';
import Card from './Aplication/components/card';
import { card } from './Aplication/API/store';
import Shop from './Aplication/components/shopBtn';
function App(){
  
  return(
    <div className="bg-[#777]">
    <Navbar/>
    <Provider store={card}>
    <Shop/>
      <div className='flex flex-wrap mt-10 gap-5 justify-center'>
        <Card/>
      </div>
    </Provider>
    </div>
  )
  
}

export default App;