import bannerImage from '../assets/img/Banner_Home.png';


const Home = () => {
  return (
    <div className="containerHome">
      <img src={bannerImage} alt="Banner" className="d-inline-block align-top" />
    </div>
  );
}
export default Home;