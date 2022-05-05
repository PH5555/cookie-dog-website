import { useNavigate } from 'react-router-dom';
import './CookieCard.css'

function CookieCard(){
    const navigate = useNavigate();
    return(
      
            <div className='Cookie-Card'>
            <img className='Cookie-Image' src="img/sample.png" onClick={() => navigate('/cookieDetail')}></img>
                <div className='Cookie-Description-And-Play-Button'>
                    <div className='Cookie-Description'>
                      <p className='Cookie-Number' onClick={() => navigate('/cookieDetail')}>#032</p>
                      <p className='Cookie-Artist'>/Dr. Ahn</p>
                    </div>
                    <img className='Play-Button' src='img/music_play.svg'></img>
                </div>
            <p className='Cookie-Situation'>0/20</p>
            <a href='https://opensea.io/'><div className='Connect-Link'>view on opensea</div></a>
            </div>
    
    )
}

export default CookieCard;