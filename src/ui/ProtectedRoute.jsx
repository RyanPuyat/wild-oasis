import styled from 'styled-components';
import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user

  const { isPending, isAuthenticated, fetchStatus } = useUser();

  // 2.if there is no authenticated user, redirect to the  /login

  useEffect(
    function () {
      if (!isAuthenticated && !isPending && fetchStatus !== 'fetching') {
        navigate('/login');
      }
    },
    [isAuthenticated, isPending, fetchStatus, navigate]
  );

  // 3. While loadConfigFromFile, show a Spinner,
  if (isPending)
    return (
      <Fullpage>
        <Spinner />;
      </Fullpage>
    );

  //   4. if there is a user render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
