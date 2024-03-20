import blog from "./blog.json";

const Blogs = () => {
  const bdata = blog.map((item) => {
    return (
      <>
        <div className="container">
          <section className="blog" id="blog">
            <div className="blog-image">
              <img src={item.image} alt="" />
            </div>
            <div className="blog-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="/" className="read-more">
                Read More
              </a>
            </div>
          </section>
        </div>
      </>
    );
  });

  return bdata;
};

export default Blogs;
