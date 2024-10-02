import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdHeight } from 'react-icons/md';

function BasicExample(props) {
  return (
    <Card style={{ width: '224px', height: '119px',backgroundColor: '#5c5a64', color: 'white' }}>
      <Card.Body>
        <Card.Title><b>{props.item}</b></Card.Title>
        <Card.Text>
          Some quick example
        </Card.Text>
        <Button variant="primary" style={{fontSize: '12px',height:'30px'}}>Add</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;