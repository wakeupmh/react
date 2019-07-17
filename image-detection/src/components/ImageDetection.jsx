import React from "react";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "@tensorflow/tfjs-core";

class App extends React.Component {
    videoRef = React.createRef();
    canvasRef = React.createRef();
    componentDidMount() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            const webCamPromise = navigator.mediaDevices
                .getUserMedia({
                    audio: false,
                    video: {
                        facingMode: "user"
                    }
                })
                .then(stream => {
                    window.stream = stream;
                    this.videoRef.current.srcObject = stream;
                    return new Promise((resolve, reject) => {
                        this.videoRef.current.onloadedmetadata = () => {
                            resolve();
                        };
                    });
                });
            const modelPromise = cocoSsd.load();
            Promise.all([modelPromise, webCamPromise])
                .then(values => {
                    this.detectFrame(this.videoRef.current, values[0]);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    detectFrame = (video, model) => {
        model.detect(video).then(predictions => {
            this.renderPredictions(predictions);
            requestAnimationFrame(() => {
                this.detectFrame(video, model);
            });
        });
    };

    renderPredictions = predictions => {
        const ctx = this.canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const font = "16px Ubuntu";
        ctx.font = font;
        ctx.textBaseline = "top";
        predictions.forEach(prediction => {
            console.log(prediction);
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            const width = prediction.bbox[2];
            const height = prediction.bbox[3];
            ctx.strokeStyle = "#4bf369";
            ctx.lineWidth = 4;
            ctx.strokeRect(x, y, width, height);
            ctx.fillStyle = "#4bf369";
            const textWidth = ctx.measureText(prediction.class).width;
            const textHeight = parseInt(font, 10);
            ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
        });

        predictions.forEach(prediction => {
            const x = prediction.bbox[0];
            const y = prediction.bbox[1];
            ctx.fillStyle = "#fff";
            ctx.fillText(prediction.class, x, y);
        });
    };

    render() {
        return (
        <div>
            <h2>Image real time detection 📷☕</h2>
            <video
                autoPlay
                playsInline
                muted
                width="600"
                height="500"
                ref={this.videoRef}
                crossOrigin="anonymous"
            />
            <canvas
                ref={this.canvasRef}
                width="600"
                height="500"
                crossOrigin="anonymous"
            />
        </div>
        );
    }
}

export default App