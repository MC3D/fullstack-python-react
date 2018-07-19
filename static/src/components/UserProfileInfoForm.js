import React, { Component } from 'react';

import BASE_URL from './../index.js';

class UserProfileInfoForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: '',
      image: '',
      previewImage: '',
      usermessage: ''
    }

    this._handleInput = this._handleInput.bind(this);
    this._postUserProfileInfo = this._postUserProfileInfo.bind(this);
  }

  _handleInput(event) {
    console.log('start', event.target.name);
    let name = event.target.name;

    if(name === 'username') {
      this.setState({username: name})
    }

    if(name === 'image') {
      console.log('image selected');
      // The selected files' are returned by the element's HTMLInputElement.files property — this returns a FileList object, which contains a list of File objects
      let file = event.target.files[0];

      // we'll use this value when we save the image (see _saveImage)
      this.setState({image: file});

      // The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
      let reader = new FileReader();

      // A handler for the loadend event. This event is triggered each time the reading operation is completed (either in success or failure).
      reader.onloadend = () => {
        this.setState({ previewImage: reader.result });
      }

      // Starts reading the contents of the specified Blob, once finished, the result attribute contains a data: URL representing the file's data.
      reader.readAsDataURL(file);
    }
  }

  _postUserProfileInfo(event) {
    event.preventDefault();

    let url = `${BASE_URL}/profiles/`;

    let data = {
      picture: this.state.image
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  render() {
    return(
      <form onSubmit={this._postUserProfileInfo}>
        {/* <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={this.state.username} onChange={this._handleInput} required />
        </div> */}
        <div className="custom-file">
          {/* the file input provides a button that opens up a file picker dialog that allows the user to choose a file */}
          {/* File inputs' value attribute contains a DOMString that represents the path to the selected file(s). */}
          <input type="file" className="custom-file-input" id="image" name="image" onChange={this._handleInput} required />
          <label className="custom-file-label" htmlFor="image">Choose profile picture...</label>
        </div>
        <div className = "form-group">
          <span>Preview image</span>
          <div><img src={this.state.previewImage} alt='user profile image'/></div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default UserProfileInfoForm;
