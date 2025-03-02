const ImageBox = ({ src, hasBookMark, alt }) => {
  return (
    <div className="class-img__img-box">
      {hasBookMark && <i class="fa-solid fa-bookmark class-img__bookmark"></i>}
      <img src={src} alt={alt} className="class-img__img" />
    </div>
  );
};

export default ImageBox;
