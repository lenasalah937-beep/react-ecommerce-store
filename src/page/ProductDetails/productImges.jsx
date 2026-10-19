export default function ProductImges({ product }) {
  return (
    <div className="imges-detail">
      <div className="big-img">
        <img id="big-img" src={product.images[0]} alt={product.title} />
      </div>
      <div className="sm-img">
        {product.images.map((img, index) => (
          <div className="sm-div-img" key={index}>
            <img
              src={img}
              alt={`${product.title} ${index + 1}`}
              onClick={() => (document.getElementById("big-img").src = img)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
