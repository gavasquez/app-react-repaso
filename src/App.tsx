import { useState } from 'react';
import { Card, CardBody } from './components/Card';
import { CustomButton } from './components/CustomButton';
import { List } from './components/List';

function App(){
  const list: string[] =[ 
    'Goku',
    'Vegeta',
    'Picoro',
    'Krilin',
    'Trunks'
  ]

  const [dataList, setDataList] = useState(list);

  const handleSelect =(elemento: string) => {
    console.log(elemento)
  }

  //const [isActive, setIsActive] = useState(false)

  /* const handleClick = () => {
    setIsActive(!isActive);
  } */

 const handleAdd =() => {
    
    setDataList( prev => {

      return [
        ...prev,
        `New Element`,
      ]
    });
  }

  const  handleRemove = (element: string) => {
    setDataList(prev => {
      return prev.slice(0, -1);
    });
  }

  /* const contenido = list.length !== 0 &&  <List data={list} onSelect={handleSelect}/>; */

  return (
  <Card>
    {/* {
      '' && 'String Vacio'
    }
    {
      'Hola Mundo' && 'String Hola Mundo'
    }
    {
      null && 'Nulo'
    }
    {
      list.length !== 0 && 'Mi lista'
    } */}
    <CardBody title={"Titulo"} text={"Hello, World!"} />
    {
      dataList.length !== 0 &&  <List data={dataList} onSelect={handleSelect}/>
    }
    <CustomButton isActive={false} onClick={() => handleAdd()}>Agregar</CustomButton>
    <CustomButton isActive={false} onClick={(e) => handleRemove(e!)}>Eliminar</CustomButton>
  </Card>)
}

export default App;