import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../../utils/UserContext';
import styled from 'styled-components';

const Main = styled.div`
    height:75px;
    background-color:#522D80;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Title = styled.h1`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 49px;
    letter-spacing: 3.69231px;

    & > a{
        color:#FFFFFF;
        text-decoration: none;
    }
`
const Navigation = styled.div`
    display:flex;
`
export default function Header( props ){

    const history = useHistory();

    const { user } = useContext( UserContext );

    const logout = ( e ) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
        window.location.reload();
        history.push( '/' );
    }
  return(
    <Main>
        <Title><Link to="/">AnywhereFitness</Link></Title>
        <Navigation>
            {
                user.id ? (
                    <div>
                        <Link to="/dashboard" className="header-link">Dashboard</Link> 
                        <Link to="/" className="header-link"><span onClick={logout}>Logout</span></Link> 
                    </div>

                )
                :(
                    <div>
                        <Link to="/login" className="header-link">Login</Link>
                        <Link to="/register" className="header-link">Register</Link>

                    </div>
                )
                
            }
        </Navigation>
    </Main>
  );
}