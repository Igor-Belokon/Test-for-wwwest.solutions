import React from "react";
import { Redirect } from "react-router-dom";

export default class Profile extends React.Component {
  state = {
    news: false,
    home: false
  };
  onNews = () => {
    this.setState({ news: !this.state.news });
  };
  onHome = () => {
    this.setState({ home: !this.state.home });
  };
  render() {
    const { home } = this.state;
    const { news } = this.state;
    if (home) {
      return <Redirect to="/home" />;
    }
    if (news) {
      return <Redirect to="/news" />;
    }

    return (
      <div>
        <div className="header">
          <div className="header-img">Profile</div>
          <div className="header-button-container">
            <div className="header-button" onClick={this.onHome}>
              Home
            </div>
            <div className="header-button" onClick={this.onNews}>
              News
            </div>
            <div className="header-button">Prof</div>
          </div>
        </div>
        <div className="main-block2">
          <div className="block-inf">
            <div className="avatar"></div>
            <div className="inf-About-Me">
              <div className="status">
                And if the light were to shine on people like him. This light,
                it would have blinded everyone
              </div>
              <div className="about-me">
                <div>date of birth: 21.07.1998 </div>
                <div>gender: male</div>
                <div>education facility: DIIT</div>
              </div>
            </div>
          </div>
          <div className="briefly-about-me">
            Remember those walls i built Well baby they're tumbling down And
            they didn't even put up a fight They didn't even make up a sound I
            found a way to let you in But i never really had a doubt Standing in
            the light of your halo I got my angel now It's like i've been
            awakened Every rule i had you breakin It's the risk that i'm takin I
            ain't never gonna shut you out Everywhere i'm looking now I'm
            surrounded by your embrace Baby i can see your halo You know you're
            my saving grace You're everything i need and more It's written all
            over your face Baby i can feel your halo Pray it won't fade away I
            can feel your halo halo halo I can see your halo halo halo I can
            feel your halo halo halo I can see your halo halo halo Hit me like a
            ray of sun Burning through my darkest night…
          </div>
        </div>
      </div>
    );
  }
}
