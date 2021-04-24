import { useState } from 'react';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <Form onClear={() => setItems([])} onCreate={(value) => setItems([value, ...items])}></Form>
          <List items={items}></List>
        </div>
      </div>
      
    </div>
  );
}

export default App;
