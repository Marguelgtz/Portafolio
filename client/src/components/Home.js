import React from 'react'
import "./home.css";
import Modal from 'react-modal';


class Home extends React.Component {
  constructor(){
    super();
    this.state = {
      copySuccess: '',
      inputValue: 'marguel.gtz@gmail.com',
      clipboardModal: false,
    }
  }

  copyToClipboard = (e) => {
    this.textArea.select()
    document.execCommand('copy')
    e.target.focus()
    alert('Email coppied to clipboard')
    this.setState({copySuccess: 'Coppied'})
  }



  render() { 
    return ( 
      <div className="home-main-container"> 
      <div className="home-container">

        <div className="left-icons-container">
          <a href="https://github.com/Marguelgtz">
            <img  src="https://image.freepik.com/free-icon/github-logo-in-a-rounded-square_318-40761.jpg" alt="" className="square"/>
          </a>
          <a href="https://www.linkedin.com/in/marguelgtz/" >
            <img  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="" className="square"/>
          </a>
          <img  src="https://cdn4.iconfinder.com/data/icons/happily-colored-snlogo/512/gmail-email-mail-logo-circle-material.png" alt="" className="square" onClick={this.copyToClipboard}/>
        </div>

        <div className="right-container">
          <div className="card">
            <div className="avatar-container">
              <img src="https://media.licdn.com/dms/image/C4E03AQEGpY8mrcoGbA/profile-displayphoto-shrink_200_200/0?e=1553731200&amp;v=beta&amp;t=_GdGkW_eFj7N5SYkbGHh8azMKv47OJLMb-2DPbipPfY" alt="" className="avatar"/>
            </div>
            <div className="header-conttainer">
              <h1>Marguel Gutierrez</h1>
              <h2>Software Engineer</h2>
              <textarea ref={(textarea) => this.textArea = textarea}value='marguel.gtz@gmail.com' className="email-text"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Home;