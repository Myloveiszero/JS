import React from 'react';

class Mix extends React.Component {
  state = {
    visiable: false
  }
  handleToogle = (e) => {
    this.setState({
      visiable: !this.state.visiable
    })
    e.stopPropagation();
  }
  componentDidMount() {
    document.body.addEventListener('click', () => {
      this.setState({
        visiable: false
      })
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleToogle}> toogle </button>
        <div style={{ display: this.state.visiable ? 'block' : 'none'}}>
          内容
        </div>
      </div>
    )
  }
}

export default Mix;
