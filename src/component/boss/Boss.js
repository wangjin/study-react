import React, { Component } from 'react'
import './boss.css'
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
  constructor(props) {
    super(props)
    this.toToggle = this.toToggle.bind(this)
    this.state = { isShow: false }
  }
  render() {
    return (
      <div>
        {/* 通过css实现动画 */}
        <div className={this.state.isShow ? 'show' : 'hide'}>
          BOSS级人物-孙悟空
        </div>
        {/* 通过 CSSTransition实现动画 */}
        <CSSTransition
          in={this.state.isShow} //用于判断是否出现的状态
          timeout={2000} //动画持续时间
          classNames="boss-text" //className值，防止重复
          unmountOnExit //元素退场时，自动把DOM也删除
        >
          <div>BOSS级人物-猪八戒</div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggle}>
            {this.state.isShow ? '赶走Boss' : '召唤Boss'}
          </button>
        </div>
      </div>
    )
  }

  toToggle() {
    this.setState({ isShow: this.state.isShow ? false : true })
  }
}

export default Boss
