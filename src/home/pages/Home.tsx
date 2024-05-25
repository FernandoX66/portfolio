import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <div className="container main-container">
        <div className="blur"></div>
        <div className="blur"></div>

        <section className="main-information">
          <p className="main-information__salute">Hello there! 👋</p>
          <p className="main-information__title">
            My name is <span>Fernando Villanueva</span>,
          </p>
          <p className="main-information__description">
            I'm a Front-End Developer from El Salvador specialized in Angular.
            I'm passionate about building web applications and learning new
            technologies.
          </p>
        </section>
      </div>
    </main>
  );
};
