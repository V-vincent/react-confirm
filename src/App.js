import React ,{Component} from 'react';
import ReactDOM from "react-dom";
import confirm from "./confirm"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
          Hello!
      </div>
    )
  }

  async componentDidMount(){
    let res = await confirm("确定删除吗？")
    if(res) {
        console.log("是")
    } else {
        console.log("否")
    }
}
}

export default App;
