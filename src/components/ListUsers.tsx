import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useActions } from './../redux/hooks/useActions';
import { useTypedSelector } from './../redux/hooks/useTypedSelector';

const ListUsers = () => {
  const { getListUsers, getMoreListUsers } = useActions();
  const { data, loading, error, hasLoadMore, pages } = useTypedSelector(
    (state) => state.listUsers
  );

  useEffect(() => {
    getListUsers(`8`);
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {error && <p className="text-center">{error}</p>}
      {loading && <p className="text-center">Loading....</p>}
      <Row>
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={() => getMoreListUsers('8', pages, data)}
          hasMore={hasLoadMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="row"
        >
          {!error &&
            !loading &&
            data?.map((user: any, i: any) => (
              <Col sm={12} md={6} xl={3} key={i}>
                <Card className="mb-4">
                  <LazyLoadImage
                    alt={`${user.name.first} ${user.name.last}`}
                    src={user.picture.thumbnail}
                    height={'180'}
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
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default ListUsers;
