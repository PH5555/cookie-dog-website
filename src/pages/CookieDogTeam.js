import './CookieDogTeam.css'
import TeamCard from './TeamCard';

function CookieDogTeam(){
    return(
        <div className='Team-Description'>
            <div className='Title'>COOKIEDOG Team</div>
            <div className='Detail'>We are looking for talented artists all over the world. The one sho shore ujjugu jeojjeogu<br/>our passion for bbabbi and deng dong deng.<br/>We all have to enter the cookiedog metaverse together</div>
            <div className='Team-List'>
                <img className='Background' src='img/teamImg.png'/>
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