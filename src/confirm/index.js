import React from "react";
import ReactDOM from "react-dom";
import "./index.css" ;

class Confirm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : "确认？"
        }
    }
    render() {
        return (
            <div className="confirm">
                <div className="confirm__content">
                    <div className="confirm__title">
                        {this.props.title || this.state.title}
                    </div>
                    <div className="confirm__btn">
                        <button className="btn sure" onClick={e => {
                            confirmFun.hide();
                        }}>确定</button>
                        <button className="btn cancel" onClick={e => {
                            confirmFun.hide();
                            return false
                        }}>取消</button>
                    </div>
                </div>
            </div>
        )
    }
}
let node = null ;
const confirmFun = {
    hide() {
        if(node) {
            ReactDOM.unmountComponentAtNode(node);
            document.body.removeChild(node);
            return true;
        }
    },
}
 function confirm(params) {
    node = document.createElement("div");
    document.body.appendChild(node);
    ReactDOM.render(<Confirm  title={params}/> , node);
    return true;
}

export default confirm 