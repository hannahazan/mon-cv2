import '../css/index.css'
import '../css/landingPage.css'
import '../css/mobileResponsive.css'
import cross from '../pictures/xmark-solid.svg'
import avatar from '../pictures/xavatario.png'
import { LoremIpsum, Avatar } from 'react-lorem-ipsum'
import { Home } from 'tabler-icons-react';
import { Code } from 'tabler-icons-react';
import { Database } from 'tabler-icons-react';
import { DeviceMobile } from 'tabler-icons-react';
import { PencilPlus } from 'tabler-icons-react';
import { DeviceAnalytics } from 'tabler-icons-react';
import { Menu2 } from 'tabler-icons-react';
import { Star } from 'tabler-icons-react';
import { DeviceDesktop } from 'tabler-icons-react';
import { UserCircle } from 'tabler-icons-react';
import { useEffect, useState } from 'react'
              
export default function Landing(){
    
    const changeClassMenu=()=>{
        document.getElementById('navListrespon').className ="responsivenavList2"
        document.getElementById('contMenu').className="containerMenu2"
        document.getElementById('Cross').className='cross2'
        document.getElementById('Line1').className="line2";
        document.getElementById('Line2').className="line2";
        document.getElementById('Line3').className="line2";
        document.getElementById('Line4').className="line2";
        document.getElementById('Line5').className="line2";   
    }
    const changeClassCross=()=>{
        document.getElementById('navListrespon').className ="responsivenavList";
        document.getElementById('contMenu').className="containerMenu"
        document.getElementById('Cross').className='cross'
    }
   
    window.addEventListener("resize",(event) => {
        if(window.innerWidth>820){
            document.getElementById('navListrespon').className ="responsivenavList"
            document.getElementById('Cross').className='cross'
        }
        else if(window.innerWidth<=820 &&  document.getElementById('Cross').className=='cross2' ){
            document.getElementById('contMenu').className="containerMenu2"
            document.getElementById('navListrespon').className ="responsivenavList2"
            document.getElementById('Line1').className="line2";
            document.getElementById('Line2').className="line2";
            document.getElementById('Line3').className="line2";
            document.getElementById('Line4').className="line2";
            document.getElementById('Line5').className="line2"; 
        }
        else{
            document.getElementById('contMenu').className="containerMenu"
        }  
       
    })
   
     window.addEventListener('scroll',()=>{
        let position=window.scrollY
        console.log(position)
        if(position >=1100 && window.innerWidth>820){
            document.getElementById('animationCompFront').className="containerCompFront2"
        }
        else{
            console.log('hello')
        }
        if(position>=1200 && window.innerWidth>820){
            document.getElementById('animationCompBack').className="containerCompBack2"
        }
        else{
            console.log('hello')
        }
       
    })
    
    
    return(
   <div className="all">    
        <header>
            <div className="displayFiltre"> 
                <nav className="navBar">
                    <Home
                    size={30}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='home'
                    />
                    <ul className="navList">
                        <li>À propos</li>
                        <li>Compétences</li>
                        <li>Parcours</li>
                        <li>Réalisations</li>
                        <li>Contact</li>
                    </ul>
                    <div className='containerMenu' id="contMenu"><Menu2
                    size={48}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='menu'
                    onClick={changeClassMenu}
                    />
                    </div>
                    <img src={cross} className='cross' id="Cross" onClick={changeClassCross}></img>
                </nav>
                <ul className="responsivenavList"  id="navListrespon">
                    <li className='responLi'>
                        À propos   
                    </li>
                    <div className='line' id="Line1"></div>
                    <li className='responLi'>
                        Compétences
                    </li>
                    <div className='line' id="Line2"></div>
                    <li className='responLi'>
                        Parcours
                    </li>
                    <div className='line' id="Line3"></div>
                    <li className='responLi'>
                        Réalisations
                    </li>
                    <div className='line' id="Line4"></div>
                    <li className='responLi'>
                        Contact
                    </li>
                    <div className='line'id="Line5"></div>
                </ul>
                <section className="devP">
                    <div className="devPblock1">
                        <p>Bonjour, je m'appelle Hannah et je recherche</p>
                    </div>
                    <div className="devPblock2">
                        <p className="devPblock2Ele">une</p>
                        <p className="devPblock2Ele" id="alter">Alternance</p>
                        <p className="devPblock2Ele"> en tant que</p>
                        <p className="devPblock2Ele" id="dev">Développeuse Web Full-stack</p>    
                    </div>
                    <p className="devPblock2Resp">une Alternance en tant que Développeuse web Full-stack</p>
                    <div>
                        <p>sur Paris et sa région</p>
                    </div>
                </section>
                <section className="picto">
                    <div className="pictoAndP">
                        <Code
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Front-end</p>
                    </div>
                    <div className="pictoAndP">
                        <Database
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Back-end</p>
                    </div>
                    <div className="pictoAndP">
                        <DeviceMobile
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Mobile</p>
                    </div>
                    <div className="pictoAndP">
                        <PencilPlus
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Design</p>
                    </div>
                </section>
            </div>
        </header>
        <main>
            <section className='Apropos'>
                <div className='avatarCard'>
                    <img src={avatar} className='avatar'></img>
                    <div className='containParaAva1'>
                        <div className='containParaAva2'>
                            <p className='paraAvaBold'>Nom: </p>
                            <p className='paraAva'> Azan Hannah</p>
                        </div>
                        <div className='containParaAva2'>
                            <p className='paraAvaBold'>Âge: </p>
                            <p className='paraAva'> 35 ans</p>
                        </div>
                        <div className='containParaAva2'>
                            <p className='paraAvaBold'>ville: </p>
                            <p className='paraAva'> Paris</p>
                        </div>
                        <div className='containParaAva2'>
                            <p className='paraAvaBold'>hobbies: </p>
                            <p className='paraAva'> lecture, piano, jeux vidéo, web-design et<br/> développement web</p>
                        </div>
                    </div>
                </div >
                <div className="text-wrapper">
                    <LoremIpsum p={3} />
                </div>,
            </section>
            <section className='compétences'>
                <p className='pComp'>Compétences</p>
                <div className='containerCompFront' id='animationCompFront'>
                    <div className='iconComp'>
                        <Code
                            size={200}
                            strokeWidth={2}
                            color={'#974063'}
                            />
                    </div>
                    <div className='cardComp'>
                        <div className='pFront'>Front-end</div>
                        <div className='PDescrFront'>Création et intégration de sites web et applications mobiles responsive, accessibles et répondant aux normes W3C.</div>
                        <div className='containerCardCompFront'>
                            <div className='containerCardAllCompPAndStar'>
                                <div className='containerCardCompPandStar'>
                                        <p className='containeCardCompP'>HTML5</p>
                                    <div className='containerCardStars'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>CSS3</p>
                                    <div className='containerCardStars'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>JS6</p>
                                    <div className='containerCardStars' id='Js6'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='containerCardAllCompPAndStar'>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>REACT</p>
                                    <div className='containerCardStars'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>MUI</p>
                                    <div className='containerCardStars' id='MUI'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>SASS</p>
                                    <div className='containerCardStars'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                            fill={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                         <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#974063'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerCompBack' id='animationCompBack'>
                    <div className='cardComp'>
                        <div className='pBack'>Back-end</div>
                        <div className='PDescrBack'>Développement de sites web et applications, création et gestion de bases de données, programmation orientée objet et modèle 3 tiers, mise en ligne.</div>
                        <div className='containerCardCompBack'>
                            <div className='containerCardAllCompPAndStar'>
                                <div className='containerCardCompPandStar'>
                                            <p className='containeCardCompP'>NodeJs</p>
                                        <div className='containerCardStars'>
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                            />
                                        </div>
                                    </div>
                                    <div className='containerCardCompPandStar'>
                                        <p className='containeCardCompP'>MongoDB</p>
                                        <div className='containerCardStars'>
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                                fill={'#F54768'}
                                            />
                                            <Star
                                                size={40}
                                                strokeWidth={2}
                                                color={'#F54768'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='containerCardAllCompPAndStar'>
                                    <div className='containerCardCompPandStar'>
                                                <p className='containeCardCompP'>PHP</p>
                                            <div className='containerCardStars'>
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    fill={'#F54768'}
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    fill={'#F54768'}
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                />
                                            </div>
                                        </div>
                                        <div className='containerCardCompPandStar'>
                                            <p className='containeCardCompP'>MySQL</p>
                                            <div className='containerCardStars'>
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    fill={'#F54768'}
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    fill={'#F54768'}
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                    
                                                />
                                                <Star
                                                    size={40}
                                                    strokeWidth={2}
                                                    color={'#F54768'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='iconComp'>
                                <Database
                                    size={200}
                                    strokeWidth={2}
                                    color={'#F54768'}/>
                            </div>
          
                </div>
                <div className='containerCompDesign'>
                    <div className='iconComp'>
                        <PencilPlus
                        size={200}
                        strokeWidth={2}
                        color={'#FF9677'}
                        />
                    </div>
                    <div className='cardComp'>
                        <div className='pDesign'>Web design</div>
                        <div className='PDescrBack'>Conception centrée utilisateur selon les règles d'UX lors de la création d'une interface utilisateur.</div>
                        <div className='containerCardCompDesign'>
                            <div className='containerCardAllCompPAndStar'>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>PhotoShop</p>
                                    <div className='containerCardStars'id='PhotoShop'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>Figma</p>
                                    <div className='containerCardStars' id='Figma'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                    </div>
                                </div>                                
                            </div>
                            <div className='containerCardAllCompPAndStar'>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>Canvas</p>
                                    <div className='containerCardStars' id='Canvas'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                        />
                                    </div>
                                </div>
                                <div className='containerCardCompPandStar'>
                                    <p className='containeCardCompP'>Paint.net</p>
                                    <div className='containerCardStars' id='Paint'>
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            fill={'#FF9677'}
                                        />
                                        <Star
                                            size={40}
                                            strokeWidth={2}
                                            color={'#FF9677'}
                                            
                                        />
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerCompEnv'>
                    <div className='cardComp'>
                        <div className='h1Env'>Environnement de travail</div>
                        <div className='containerCardCompEnv'>
                            <div className='containerIconP'>
                                <DeviceDesktop
                                    size={30}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                                <p className='titleEnv'>Workflow:</p>
                                <p className='pEnv'>Git, Github, Postman, Slack, Notion </p>
                            </div>
                            <div  className='containerIconP'>
                                <Code
                                size={30}
                                strokeWidth={2}
                                color={'black'}
                                />
                                <p className='titleEnv'>IDE:</p>
                                <p className='pEnv'>Visual Studio Code,Vim </p>
                            </div>
                            <div  className='containerIconP'>
                                <UserCircle
                                    size={30}
                                    strokeWidth={2}
                                    color={'black'}
                                />
                                <p className='titleEnv'>Savoir-être:</p>
                                <p className='pEnv'>capacité d'adaptation, travail en équipe, organisation, rigueur, créativité</p>
                            </div>
                        </div>
                    </div>
                    <div className='iconComp'>
                        <DeviceAnalytics
                            size={200}
                            strokeWidth={2}
                            color={'#41436A'}
                        />
                    </div>
                </div>
            </section>
        </main>
    </div> 

    )
}