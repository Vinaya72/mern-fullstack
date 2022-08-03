import React, {useState} from 'react'
import {Form, Button, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const SearchBox = () => {
    const[keyword, setKeyword] = useState('')
    const history = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()){
            history(`/search/${keyword}`)
        } else{
            history('/')
        }
    }

  return (
    <Form onSubmit={submitHandler} >
      <Row>
        <Col>
        <Form.Control 
        type='text' 
        name='q' 
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        style={{width: '120%' }}
        >
       </Form.Control>
        </Col>
        <Col>
        <Button type='submit' variant='outline-success' className='p-2 ms-3'>
            Search
        </Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox