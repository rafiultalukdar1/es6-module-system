import { Suspense } from 'react';
import './App.css'
// import { add, diff, mult, devide as div } from './utils/math/math'
import Bottles from './components/Bottles/Bottles';

//Bottles Promise
const bottlesPromise = fetch('./bottle.json').then(res => res.json());

function App() {

  /*const sum = add(3, 7);
  const subs = diff(10, 7);
  const goonfol = mult(5, 5)
  const vag = div(25, 5)
  console.log("sum:" , sum, "diff:" , subs, "mult:" , goonfol, "devide:" , vag)*/
  
 
  return (
    <>
      <h1 className='text-[38px] text-[#141414] font-[700] py-3'>Buy Awesome Water Bottles</h1>
      <Suspense fallback={<h1 className='text-[30px] text-[#141414] font-[700] pb-3'>Water Bottles Loading.....</h1>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
