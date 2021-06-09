import { useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
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
        {error && <p className="text-center">{error}</p>}
        {loading && <p className="text-center">Loading....</p>}
        {!error &&
          !loading &&
          data?.map((user: any, i: any) => (
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
                  <ul>
                    <li>Telephone : {user.phone}</li>
                    <li>Email : {user.email}</li>
                    <li>Location : {user.location.country}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ListUsers;
