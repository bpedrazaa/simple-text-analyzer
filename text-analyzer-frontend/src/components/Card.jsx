const Card = ({text, title}) => {
  // To render
  return (
    <div>
      <div className='card bg-dark text-white mx-auto mb-2' style={{ width: 500 }}>
        <div className='card-body'>
          <h4 style={{color : "#ffa500"}}>{title}</h4>
          <h5 className='card-title'>{text}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
