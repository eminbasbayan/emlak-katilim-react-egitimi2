import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);

  return (
    <div className="product-details-page">
      <h1>Product Details Page</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} className="img-fluid" alt={product.title} />
        </div>
        <div className="col-md-6">
          <h1>{product.title}</h1>
          <p className="lead">{product.description}</p>
          <h3 className="text-primary">${product.price}</h3>
          <button className="btn btn-success btn-lg mt-3">Add to Cart</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h2>Customer Reviews</h2>
          {reviews.map((review) => (
            <div key={review.id} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{review.user}</h5>
                <p className="card-text">{review.comment}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Rating: {review.rating} / 5
                  </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

const reviews = [
  {
    id: 1,
    user: "John Doe",
    comment: "Great product, highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    user: "Jane Smith",
    comment: "Good value for the price.",
    rating: 4,
  },
];
