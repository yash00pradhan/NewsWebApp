import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props ;
    return (
         
      <div className='my-3'>
           <div className="card">
                <img src={!imageUrl?"https://www.reuters.com/resizer/cE-VdbGcOLhG4HheB1ZNauAQWYU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q2HICSPEHFIJDGDYZRIJINGDUY.jpg" : imageUrl} 
                            className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 classNam e="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem