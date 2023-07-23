import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 5 ,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string ,
    pageSize : PropTypes.number, 
    category : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false ,
      page : 1 ,
      // pageSize : 20
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=651f5ae78dd3464386d2582291f49aa2&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    console.log("cdm")
  }
  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=651f5ae78dd3464386d2582291f49aa2&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page : this.state.page + 1 ,
        articles: parsedData.articles ,
      })
    }
   
  }
  handlePrevClick = async () => {

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=651f5ae78dd3464386d2582291f49aa2&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      page : this.state.page-1,
      articles: parsedData.articles })
  }
  render() {
    return (
      <div className=" container my-3">
        <h1 className="text-center" style={{margin: '35px 0px'}}>NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 85) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              {/* <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} /> */}
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
 
export default News