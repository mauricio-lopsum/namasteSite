import React from "react"
import Layout from "../components/Layout"
import '../styles/pages/home.scss';

export default function IndexPage() {
  return (  
    <Layout> 
      <S1 />
    </Layout>
  )
}

class S1 extends React.Component{
  render(){
    return(
      <div className="subsection subsection-front">
        <div className="subsection-videobg">
          <video muted loop playsInline autoPlay>
            <source type="video/mp4" src={require('../static/cosmos_1.mp4')}></source>
          </video>
          <div className="subsection-videobg-overlay"></div>
        </div>
        <div className="subsection-front-content">
          <div className="subsection-front-col">
            <div className="subsection-front-content-title">
              <span><strong>Ask</strong> and you</span> <span>shall <strong>receive</strong></span>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}