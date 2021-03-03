import React from "react";
import song from '../audio/nadia.mp3'

class Sound extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({
            play: false,
        })
    }

    audio = new Audio(song)

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.code === 'KeyX') {
                console.log('5')
                return this.play()
            }
        });
    }

    play = () => {
        if (this.state.play) {
            this.setState({
                play: false,
            })
            this.audio.pause()
        } else {
            this.setState({
                play: true,
            })
            this.audio.play()
        }
    }

    render() {
        return (
            <div>
                <div onClick={this.play} className={!this.state.play ? 'fas fa-play fa-2x' : 'fas fa-stop fa-2x'} ></div>
            </div>
        );
    }
}

export default Sound;
