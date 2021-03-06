import React, {Fragment, useEffect,useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom';
import GithubContext from '../../context/github/githubcontext'
const User =({ match})=> {

    const githubContext=useContext(GithubContext);
    const {getuser, loading,user,repos,getuserrepos}     = githubContext;

    useEffect(()=>{
        getuser(match.params.login);
        getuserrepos(match.params.login);
    },[])

    const{
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable

        }=user;
        if(loading)
        return <Spinner/>;
        return (
            <Fragment>
            <Link to="/" className="btn btn-light">
                Back To Search
            </Link>
            Hireable:{' '}
            {hireable?<i className="fas fa-check text-success"/> : <i className="fas fa-times-circle text-danger"/>}
            <div className="card grid-2">
                <div className="all-center">
                    <img alt="" src={avatar_url} className="round-img" style={{width:'150px'}}/>
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
            <div>
                {bio && <Fragment>
                    <h3>
                        Bio
                    </h3>
                    <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>UserName: </strong> {login}
                                </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                                <strong>Company: </strong> {company}
                                </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <strong>Website: </strong> {blog}
                                </Fragment>}
                        </li>
                    </ul>
            </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-primary">Follower: {followers}</div>
                <div className="badge badge-success">Following: {following}</div>
                <div className="badge badge-light">Public_repos: {public_repos}</div>
                <div className="badge badge-dark">Public_gists: {public_gists}</div>
            </div>
            <Repos repos={repos}/>
            </Fragment>
        )
    
}


export default User
