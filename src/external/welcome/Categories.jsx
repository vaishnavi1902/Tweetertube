import img from "../../assets/img-1.jpg";

const Categories = () => {
  return (
    <section className="container category-container">
      <h1 className="home-h1">
        <span>Outstanding </span> Categories
      </h1>
      <div className="categories">
        <div className="category">
          <img src={img} alt="" />
          <h3 className="title">Title</h3>
          <p className="course">Courses</p>
        </div>
        <div className="category">
          <img src={img} alt="" />
          <h3 className="title">Title</h3>
          <p className="course">Courses</p>
        </div>
        <div className="category">
          <img src={img} alt="" />
          <h3 className="title">Title</h3>
          <p className="course">Courses</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
