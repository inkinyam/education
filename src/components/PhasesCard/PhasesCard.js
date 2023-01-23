
const PhasesCard= ({active, title, description}) => {
  const cardClassList = active? 'phases__card phases_active' : 'phases__card';

 return (
  <div className={cardClassList}>
    <div className="phases__dot-box">
      <div className="phases__dot"></div>
    </div>
    <h3 className="phases__title">{title}</h3>
    <p className="phases__description">{description}</p>
  </div>
 )
}

export default PhasesCard;