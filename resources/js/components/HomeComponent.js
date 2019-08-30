import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomeComponent extends Component {
  constructor () {
    super()

    this.state = {
      produtos: []
    }
  }

  componentDidMount () {
    axios.get('/api/produtos').then(response => {
      this.setState({
        produtos: response.data
      })
    })
  }

  render () {
      const { produtos } = this.state.produtos
    return (
      <div className='container py-4'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card'>
              <div className='card-header'>HOME</div>

              <div className='card-body'>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeComponent
