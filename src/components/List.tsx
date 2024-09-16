import { useState } from 'react';

interface Props {
  data: string[],
}


export const List = ({data}: Props) => {

  const [index, setIndex] = useState<number>(1);

  const handleCLick = (i: number) => {
    setIndex(i);
  }

  return (
    <ul className="list-group mt-2">
      {
        data.map( (item, i)  => (
          <li className={`list-group-item ${ index == i ? 'active': '' }`} key={item} onClick={() => handleCLick(+i)} style={{ "cursor": "pointer"}}>{ item }</li>
        ))
      }
    </ul>
  )
}