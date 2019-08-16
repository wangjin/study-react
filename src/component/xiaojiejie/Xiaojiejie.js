import React, { Component, Fragment } from "react";
import XiaojiejieItem from "./XiaojiejieItem";
import Boss from "../boss/Boss";
import axios from "axios";

export default class Xiaojiejie extends Component {
  //js的构造函数，由于其他任何函数执行
  constructor(props) {
    super(props); //调用父类的构造函数，固定写法
    this.state = {
      inputValue: "", // input中的值
      list: [] //服务列表
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}> 增加服务 </button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <XiaojiejieItem
                key={index + item}
                index={index}
                content={item}
                deleteItem={this.deleteItem.bind(this)}
              />
            );
          })}
        </ul>
        <Boss />
      </Fragment>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5d56633cbf6a0d2f8f419886/study-react/service-list"
      )
      .then(res => {
        console.log("axios 获取数据成功 => " + JSON.stringify(res));
        this.setState({ list: res.data });
      })
      .catch(error => {
        console.log("axios 获取数据失败 => " + error);
      });
  }

  inputChange(e) {
    console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  }

  addList() {
    console.log(...this.state.list);
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
