import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ChartAnnotaionIII.css";

export default class ChartAnnotaionIII extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
