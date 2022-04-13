import './Prologue.css';

function Prologue(){
    return(
        <div className='Prologue'>
            <div className='Prologue-Title'>Prologue of COOKIEDOG</div>
            <div className='Content-En' id='Title-Text-En'>In an unknown world in a vast digital space like the universe, No one knows<br></br>There was a place called Coasis, a sweet world of dreams where chocolate and milk flow.</div>
            <div className='Content-Kr' id='Title-Text-Kr'>우주와 같이 넓은 디지털 공간 속 어느 미지의 세계에 <br></br>초콜릿과 우유가 흐르는 달콤한 꿈의 세계 코아시스라는 곳이 있었다.</div>
            <div className='Content-1'>
                <div>
                    <div className='Content-En'>Various music and arts coexist.<br></br>In it, the ego exists and disappears as desire a place of</div>
                    <div className='Content-Kr' id='content1-text'>다양한 음악과 예술이 공존하며<br></br>그 속에서 자아는 원하는대로 존재하고 사라지며 다시 태어나는 곳</div>
                </div>
                <img src='img/contentImg1.png' className='Img1'/>
            </div>
            <div className='Content-2'>
                <img src='img/teamImg.jpg' className='Img2'/>
                <div>
                    <div className='Content-En'>Due to an unknown error,<br></br>It's broken and scattered into pieces of data like fragments.<br></br>It drifted around digital space like dust.</div>
                    <div className='Content-Kr' id='content2-text'> 알 수 없는 오류로 인해 이곳은 파편처럼 데이터 조각들로 부셔지고 흩어져 <br></br>먼지와 같이 디지털 공간을 떠돌게 되었다.</div>
                </div>
            </div>
            <div className='Content-3'>
                <div>
                    <div className='Content-En'>Various music and arts coexist.<br></br>In it, the ego exists and disappears as desired. a place of</div>
                    <div className='Content-Kr' id='content3-text'> 이후 이곳을 수호하고 지키던 존재 [OVN] 들은 오랜시간 우주를 떠돌며 <br></br>잃어버린 땅을 이루던 음악의 신호를 따라 <br></br>흩어진 소리의 조각들을 모으기 시작했고, </div>
                </div>
                <img src='img/contentImg2.png' className='Img3'/>
            </div>
            
            <div className='Content-4'>
                <div>
                    <div className='Content-En'>He came back to the real world to rebuild the lost land of dreams.</div>
                    <div className='Content-Kr' id='content4-text'>다시 잃어버린 꿈의 땅 코아시스를 새롭게 재건하기 위해 현실세계로 들어왔다</div>
                </div>
                <img src='img/contentImg4.png' className='Img4'/>
            </div>
        </div>
    )
}

export default Prologue;