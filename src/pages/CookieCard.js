import './CookieCard.css'

function CookieCard(){
    return(
       
            <div className='Cookie-Card'>
            <img className='Cookie-Image' src="img/sample.png"></img>
                <div className='Cookie-Description-And-Play-Button'>
                    <div className='Cookie-Description'>
                      <p className='Cookie-Number'>#032</p>
                      <p className='Cookie-Artist'>/Dr. Ahn</p>
                    </div>
                    <img className='Play-Button' src='img/button.png'></img>
                </div>
            <p className='Cookie-Situation'>0/20</p>
            <div className='Connect-Link'>view on opensea</div>
            </div>
        
        
    )
}

export default CookieCard;