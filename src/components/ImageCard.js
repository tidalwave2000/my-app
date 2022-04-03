import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        //setup spans property in state
        this.state = { spans: 0 };
        //Setup image ref in state
        this.imageRef = React.createRef();

    }
    //start defining imageRef by using react lifecycle methods callled componentDidMount
    componentDidMount() {
        //add an event handler to this.imageRef to wait for img to load then involk a callback function called this.setSpans 
        this.imageRef.current.addEventListener('load', this.setSpans);

    }

    //define setSpans method to get the height of image for imageRef 
    setSpans = () => {
        //used to collect the current height of each of our images
        const height = this.imageRef.current.clientHeight;
        //used to calculate the amount of rows needed to display all of our images
        const spans = Math.ceil(height / 10);
        //update the state of spans
        this.setState({ spans });

    }

    render() {
        //destructure props to make it easier to code
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                {/* setup formatting for images in grid */}
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />

            </div>
        );
    }
}

export default ImageCard;