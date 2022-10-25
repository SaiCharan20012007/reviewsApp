// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  previousReview = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  nextReview = () => {
    const {index} = this.state
    if (index !== 3) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const updatedReviews = reviewsList[index]
    return (
      <div className="bgContainer">
        <h1 className="title">Reviews</h1>
        <div className="card">
          <button className="btn1" type="button" onClick={this.previousReview}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ul className="unOrderdList">
            <li className="listItem" key={updatedReviews.username}>
              <div className="imgContainer">
                <img
                  src={updatedReviews.imgUrl}
                  alt={updatedReviews.username}
                  className="profile"
                />
              </div>
              <p className="name">{updatedReviews.username}</p>
              <p className="company">{updatedReviews.companyName}</p>
              <p className="description">{updatedReviews.description}</p>
            </li>
          </ul>
          <button className="btn1" type="button" onClick={this.nextReview}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
