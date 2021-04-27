import React from 'react'
import Repoitem from './repoitem'
import PropTypes from 'prop-types'

export const repos = ({repos}) => {
    return (
        repos.map(repo  => <Repoitem repo={repo} key={repo.id}/>)
    )
    
}
repos.protoTypes={
    repos:PropTypes.array.isRequired,
}
export default repos