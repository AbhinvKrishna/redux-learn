import React from 'react'

function User(props) {
  return (
    <div>
        <h1>name:{props.data.name}</h1>
        <h1>age:{props.data.age}</h1>
    </div>
  )
}

export default User