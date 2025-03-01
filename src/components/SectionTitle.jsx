const SectionTitle = ({ mainTitle, subTitle, hasMore }) => {
  return (
    <div className="section-header">
      <div className="title">
        <span className="title--main">{mainTitle}</span>
        <span className="title--sub">{subTitle}</span>
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
