import React from 'react';
import { NavLink } from 'react-router-dom';
import { User } from '../../types/People';

type Props = {
  user: User
};

export const PeopleInfo: React.FC<Props> = ({ user }) => {
  return (
    <>
      <td>
        <NavLink
          to={`/PeoplePage/${user.slug}`}
        >
          {user.name}
        </NavLink>
      </td>
      <td>{user.sex}</td>
      <td>{user.born}</td>
      <td>{user.died}</td>
      <td>{user.fatherName}</td>
      <td>{user.motherName}</td>
    </>
  );
};
