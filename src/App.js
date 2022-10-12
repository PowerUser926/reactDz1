import "./App.css";

function HelloReact() {
  return <h1>Hello, React!</h1>;
}

function UserInfo() {
  const userInfo = {
    name: "Ihor Horbulin",
    phone: "0988283390",
    email: "ihorhorbylin@mail.com",
  };

  return (
    <div>
      <h3>My Info</h3>
      <p>Name: {userInfo.name}</p>
      <p>Phone: {userInfo.phone}</p>
      <p>Email: {userInfo.email}</p>
    </div>
  );
}

function CityInfo() {
  const cityInfo = {
    city: "Kyiv",
    country: "Ukraine",
    founded: "482 AD",
    places: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_Gate_Kiev_2018_G1.jpg/255px-Golden_Gate_Kiev_2018_G1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/80-391-9007_Kyiv_St.Michael%27s_Golden-Domed_Monastery_RB_18.jpg/270px-80-391-9007_Kyiv_St.Michael%27s_Golden-Domed_Monastery_RB_18.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/%D0%9C%D0%B0%D1%80%D1%96%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D0%B2_%D0%9A%D0%B8%D1%94%D0%B2%D1%96.jpg/271px-%D0%9C%D0%B0%D1%80%D1%96%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D0%BB%D0%B0%D1%86_%D0%B2_%D0%9A%D0%B8%D1%94%D0%B2%D1%96.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/%D0%9A%D0%B8%D1%97%D0%B2%2C_%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%2C_%D0%9B%D0%B0%D0%B2%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%B2%D1%83%D0%BB._9.jpg/270px-%D0%9A%D0%B8%D1%97%D0%B2%2C_%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%A3%D1%81%D0%BF%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%2C_%D0%9B%D0%B0%D0%B2%D1%80%D1%81%D1%8C%D0%BA%D0%B0_%D0%B2%D1%83%D0%BB._9.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/National_Bank_of_Ukraine_new.jpg/273px-National_Bank_of_Ukraine_new.jpg",
    ],
  };

  return (
    <div>
      <h3>My City</h3>
      <p>City: {cityInfo.city}</p>
      <p>Country: {cityInfo.country}</p>
      <p>Founded: {cityInfo.founded}</p>

      <div className="gallery">
        <img src={cityInfo.places[0]} alt="kyiv place" />
        <img src={cityInfo.places[1]} alt="kyiv place" />
        <img src={cityInfo.places[2]} alt="kyiv place" />
        <img src={cityInfo.places[3]} alt="kyiv place" />
        <img src={cityInfo.places[4]} alt="kyiv place" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HelloReact />
      <hr />
      <UserInfo />
      <hr />
      <CityInfo />
    </div>
  );
}

export default App;
