import './MusicBottomBar.css';

const MusicBottomBar = (props) => {
    const { start, stop } = props;
   
    return(
        <div>
        {start ? (
            <div className='Bottom-Music-Bar'>
                <div>
                    <div className='Music-Image'></div>
                    <div className='Music-Info'>
                        <p className='Music-Title'>#012</p>
                        <p className='Music-Content'>MuteHoon</p>
                    </div>
                    <div className='Button' onClick={stop}>

                    </div>
                    <div className='Progress-Bar'>

                    </div>
                    <div className='Progress'>
                        03:45
                    </div>
                </div>
            </div>
        ) : null}
        </div>
    );
}

export default MusicBottomBar;