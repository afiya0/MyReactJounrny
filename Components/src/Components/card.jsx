import hero from '../assets/hero.png'

function Card() {
  return (
    <>
      <div className="card">
        <div className="profile-pic">
          <img src={hero} alt="" />
        </div>
        <h1 className="name">ALi</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </>
  );
}

export default Card;