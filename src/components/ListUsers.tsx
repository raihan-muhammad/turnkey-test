import { useEffect } from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useActions } from './../redux/hooks/useActions';
import { useTypedSelector } from './../redux/hooks/useTypedSelector';

const ListUsers = () => {
  const { getListUsers } = useActions();
  const { data, loading, error } = useTypedSelector((state) => state.listUsers);

  useEffect(() => {
    getListUsers(`20`);

    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        {data?.map((user: any, i: any) => (
          <Col sm={12} md={6} xl={3} key={i}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={user.picture.thumbnail}
                height="180"
              />
              <Card.Body>
                <Card.Title>
                  {user.name.first} {user.name.last}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListUsers;
