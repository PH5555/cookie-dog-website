import './CookieDetail.css'

function CookieDetail(){
    return(
        <div className='Cookie-Detail'>
            <div className='Cookie'>
                <div className='View'>
                    <img className='Cookie-Detail-Img' src='/img/sample.png'/>
                    <div className='View-Opensea'>
                        <p>view on opensea</p> 
                        <img src='/img/opensea_icon.svg'/>
                    </div>
                </div>
                <div className='Description-Play'>
                    <div className='Play-Music'>
                        <img src='/img/button.png' />
                        <div>
                            <p className='Cookie-Detail-Name'>Generate</p>
                            <p className='Cookie-Detail-Creator'>/MuteHoon</p>
                        </div>

                        <div className='Cookie-Available'>
                            <div>
                                <p>Available</p>
                                <p className='Available-Current'>0 / 50</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='Description-Detail'>
                        <div>
                            <p className='Description-Title'>Discription</p>
                            <div className='Description-Content'>In universe, We’re creating a platform for a more collaborative music movement, built on web3 technology and values. On Sound, users support the artists they love</div>
                            <div className='Desription-Flex'>
                                <div className='Description-Title' id='Title-Width'>Produced by</div>
                                <p className='Description-Content' id='Content-Width'>MureHoon</p>
                            </div>

                            <div className='Desription-Flex'>
                                <div className='Description-Title' id='Title-Width'>Artwork by</div>
                                <p className='Description-Content' id='Content-Width'>Rodney</p>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
            <div className='Download-Contact'>
                <div className='Download'>

                </div>

                <div className='Contact-Address'>

                </div>
            </div>
        </div>
    )
}

export default CookieDetail;