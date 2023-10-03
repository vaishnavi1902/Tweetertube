import { PiStudentBold } from 'react-icons/pi'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import eng from "./courses/eng.png"
// import Item from './Item.jsx'
const PopularCourses = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


  return (
    <section className="container">
        <h1 className='home-h1'><PiStudentBold/> <span>Populer </span>  Courses</h1>
        <Carousel responsive={responsive} infinite={true} swipeable={true} draggable={true}>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
            <div className='slider-div'>
                <div className="course-name"><span>Course Name : </span><p className="title">English Speaking</p></div>
                <img className='slider-img' src={eng} alt="" />
                <div className="course-domain"><span>Category : </span><p className="title">Communication</p></div>
                <p className="description">
                    In this course we a providing a material and guidance of mentors in such a way that 
                    you will improve your English Speaking, English Listening, English Vocabulary, English Grammar and English Pronunciation skills.
                </p>
                <a className='read-btn' href='../courses'>Read More</a>
            </div>
        </Carousel>
    </section>
  )
}

export default PopularCourses