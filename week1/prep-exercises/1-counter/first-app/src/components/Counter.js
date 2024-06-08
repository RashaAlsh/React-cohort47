import { useState } from 'react';
import Count from './Count';
import Button from './Button';

export default function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? 'It is higher than 10!' : 'Keep counting...';

  const handleIncrease = () => setCount(count => count + 1);
  const handleDecrease = () => {
    if (count === 0){
      return;
    }
    setCount(count => count - 1);
  } 

  return (
    <>
      <Count count={count}/>
      <Button handleClick={handleIncrease} text={"+ 1"}/>
      <Button handleClick={handleDecrease} text={"- 1"}/>
      <p>{feedback}</p>
    </>
  )
}