const SectionTitle = ({ mainTitle, subTitle, hasMore }) => {
  return (
    <div className="section-header">
      <div className="title">
        <h1 className="title--main">{mainTitle}</h1>
        <p className="title--sub">{subTitle}</p>
      </div>
      {hasMore && (
        <div className="more">
          更多 <i class="fa-solid fa-caret-right"></i>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
