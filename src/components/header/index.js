import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {UserContext} from '../../utils/UserContext';
import styled from 'styled-components';

import searchIcon from '../../assets/images/icons/search.png';


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

    const handleSearch = ( e ) => {
        e.preventDefault();
    }
  return(
    <Main>
        <Title><Link to="/">AnywhereFitness</Link></Title>
        <Navigation>
            {
                user.id ? (
                    <div>
                        <form onSubmit={ handleSearch }>
                            <SearchBar type="text" name="search" placeholder="Search..."/>
                        </form>
                        <Link to="/dashboard" className="header-link">Dashboard</Link> 
                        <Link to="/" className="header-link" onClick={ logout }>Logout</Link> 
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
    & > div {
        display:flex;
    }
`

const SearchBar = styled.input`
    outline:none;
    border:none;
    color:#FFFFFF;
    background-image: url(${searchIcon});
    background-position:10px;
    background-repeat:no-repeat;
    background-size: 15px 15px; 
    background-color: #755799;
    padding:10px;
    padding-left:35px;
    box-sizing:border-box;
    
    ::placeholder{
        color: #FFFFFF;
    }
   
`