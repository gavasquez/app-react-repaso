import { useState } from 'react';

interface Props {
  data: string[],
  onSelect?: (elemento: string) => void,
}


export const List = ({data, onSelect}: Props) => {

  const [index, setIndex] = useState<number>(1);

  const handleCLick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  }

  return (
    <ul className="list-group mt-2">
      {
        data.map( (item, i)  => (
          <li className={`list-group-item ${ index == i ? 'active': '' }`} key={`${item+i}`} onClick={() => handleCLick(+i, item)} style={{ "cursor": "pointer"}}>{ item }</li>
        ))
      }
    </ul>
  )
}