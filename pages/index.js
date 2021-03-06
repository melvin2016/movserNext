import React from "react";
import Layout from "../components/Layout";
const Index = (props) => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">MOVSER!</h1>
            <div className="divider" />
          </div>
        </div>

        <div className="row section">
          <div className="col m12 s12 l6">
            <div className="card hoverable teal lighten-1 z-depth-4">
              <div className="card-content">
                <div className="card-title">
                  <span className="white-text">NOTE</span>
                </div>
                <p className="white-text">
                  MOVSER is a Web-App for retrieving Information on
                  Movies/Series .<br />
                  The Technology Behind this is Next.js(React.js) , Nodejs,
                  Expressjs .<br />
                  Powered By TMDB.
                </p>
              </div>
              <div className="card-action"></div>
            </div>
          </div>
          <div className="col m12 s12 l6 valign-wrapper">
            <img
              className="responsive-img center"
              alt="Powered By TMDB LOGO"
              src="/static/tmdb.png"
            ></img>
          </div>
        </div>
        <style jsx>{`
          .center {
            display: block;
            margin: 0 auto;
          }
          .movser {
            height: 240px;
            width: 240px;
          }
        `}</style>
      </div>
    </Layout>
  );
};
export default Index;
