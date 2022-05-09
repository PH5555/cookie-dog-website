import './CookieDogTeam.css'
import TeamCard from './TeamCard';

function CookieDogTeam(){
    return(
        <div className='Team-Description'>
            <div className='Title'>COOKIEDOG Team</div>
            <div className='Detail'>We're looking for creative artists and love pop culture.<br></br>Our vision is ambitious: we want to honor the value of music by giving a million artists the opportunity.<br></br>We're building for an metaverse.</div>
            <div className='Team-List'>
                <div className='Black-Box'/>
                <img className='Background' src='img/teamImg.jpg'/>
                <div className='Cards'>
                    <TeamCard className='Card'/>
                    <TeamCard className='Card'/>
                    <TeamCard className='Card'/>
                    <TeamCard className='Card'/>
                    <TeamCard className='Card'/>
                    <TeamCard className='Card'/>

                </div>
            </div>

        </div>
    )
}

export default CookieDogTeam; 