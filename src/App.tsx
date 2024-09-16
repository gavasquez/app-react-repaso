import { Card, CardBody } from './components/Card';
import { List } from './components/List';

function App(){
  const list =[ 
    'Goku',
    'Vegeta',
    'Picoro',
    'Krilin',
    'Trunks'
  ]
  return (
  <Card>
    <CardBody title={"Titulo"} text={"Hello, World!"} />
    <List data={list}/>
  </Card>)
}

export default App;