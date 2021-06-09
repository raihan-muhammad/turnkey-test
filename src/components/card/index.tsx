import { Card } from 'react-bootstrap';

interface Users {
  name: {
    first: string;
    last: string;
  };

  phone: string;
  email: string;
  location: {
    country: string;
  };
  picture: {
    thumbnail: string;
  };
}

const UserCard = async (data: Users) => {};

export default UserCard;
