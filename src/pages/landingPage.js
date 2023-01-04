import '../css/index.css'
import '../css/landingPage.css'
import '../css/mobileResponsive.css'
import cross from '../pictures/xmark-solid.svg'
import avatar from '../pictures/xavatario.png'
import cv from '../downloads/Azan-Hannah-cv2.pdf'
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
import { Link } from 'react-router-dom'


              
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
        if(position >=1100){
            document.getElementById('animationCompFront').className="containerCompFront2"
        }
        else{
            console.log('hello')
        }
        if(position>=1200){
            document.getElementById('animationCompBack').className="containerCompBack2"
            document.getElementById('containerCompDesignAnimation').className="containerCompDesign2"
            document.getElementById('containerCompEnvAnimation').className="containerCompEnv2"
            console.log("salut")
        }
        else{
            console.log('hello')
        }
       
    })
    
    const cardHoverFlappy=()=>{
        document.getElementById('flappyButtonId').className='flappyButton2'
        document.getElementById('hiddenButtonCardRealIdFlappy').className='hiddenButtonCardReal2'
    }
    const cardNotHoverFlappy=()=>{
        document.getElementById('flappyButtonId').className='flappyButton'
        document.getElementById('hiddenButtonCardRealIdFlappy').className='hiddenButtonCardReal'
    }
    const cardHoverOhMyFood=()=>{
        document.getElementById('ohmyfoodId').className='flappyButton2'
        document.getElementById('hiddenButtonCardRealIdOhMy').className='hiddenButtonCardReal2'
    }
    const cardNotHoverOhMyFood=()=>{
        document.getElementById('ohmyfoodId').className='flappyButton'
        document.getElementById('hiddenButtonCardRealIdOhMy').className='hiddenButtonCardReal'
    }
    const cardHoverPassword=()=>{
        document.getElementById('passwordgeneratorId').className='flappyButton2'
        document.getElementById('hiddenButtonCardRealIdPassword').className='hiddenButtonCardReal2'
    }
    const cardNotHoverPassword=()=>{
        document.getElementById('passwordgeneratorId').className='flappyButton'
        document.getElementById('hiddenButtonCardRealIdPassword').className='hiddenButtonCardReal'
    }
    return(
   <div className="all">    
        <header id='Navid'>
            <div className="displayFiltre"> 
                <nav className="navBar" >
                <a href="#Navid" className='aNavbar'><Home
                    size={30}
                    strokeWidth={2}
                    color={'#FFB8B8'}
                    className='home'
                    /></a>
                    <ul className="navList">
                        <a href="#Apropos" className='aNavbar'><li>À propos</li></a>
                        <a href="#Comp" className='aNavbar'><li>Compétences</li></a>
                        <a href='#real' className='aNavbar'><li>Réalisations</li></a>
                        <a href='#contact' className='aNavbar'><li>Contact</li></a>
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
                    <a href="#Navid" className='aNavbar'><li className='responLi'>
                        Home  
                    </li></a>
                    <div className='line' id="Line1"></div>
                    <a href="#Apropos" className='aNavbar'><li className='responLi'>
                        À propos   
                    </li></a>
                    <div className='line' id="Line2"></div>
                    <a href="#Comp" className='aNavbar'><li className='responLi'>
                        Compétences
                    </li></a>
                    <div className='line' id="Line3"></div>
                    <a href='#real' className='aNavbar'><li className='responLi'>
                        Réalisations
                    </li></a>
                    <div className='line' id="Line4"></div>
                    <a href='#contact' className='aNavbar'><li className='responLi'>
                        Contact
                    </li></a>
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
                    <p className="devPblock2Resp">une <strong className='strongHeader'>Alternance</strong> en tant que <strong className='strongHeader'>Développeuse web Full-stack</strong></p>
                    <div>
                        <p>sur <strong className='strongHeader'>Paris</strong> et sa <strong className='strongHeader'>région</strong></p>
                    </div>
                </section>
                <section className="picto">
                    <a href='#frontend' className='aCode'><div className="pictoAndP">
                        <Code
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Front-end</p>
                    </div></a>
                    <a href='#backend' className='aCode'><div className="pictoAndP">
                        <Database
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Back-end</p>
                    </div></a>
                    <a href='#design' className='aCode'><div className="pictoAndP">
                        <PencilPlus
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Design</p>
                    </div></a>
                    <a href='#workflow' className='aCode'><div className="pictoAndP">
                        <DeviceAnalytics
                        size={48}
                        strokeWidth={2}
                        color={'white'}
                        />
                        <p>Workflow</p>
                    </div></a>
                </section>
            </div>
        </header>
        <main>
            <section className='Apropos' id='Apropos'>
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
                            <p className='paraAva'> lecture, piano, jeux vidéo, <br/> web-design et développement web</p>
                        </div>
                    </div>
                </div >
                <div className='pApropos'>
                   <p className='titleApropos'>A Propos de moi</p>
                   <p>Depuis toujours passionnée par le domaine du jeux vidéo et l’informatique de manière plus large je tente aujourd’hui de concilier ces passions avec ma réalité professionnelle.<br/><br/>
C’est tout naturellement que je me suis dirigée vers le développement web afin d’entamer ma reconversion.<br/><br/>
En effet après avoir suivi plusieurs formations  j’ai pû constater que ce domaine particulier de l’informatique avait le mérite de lier logique info et créativité qui sont, pour moi, deux pendants d’une reconversion réussie !<br/><br/> 
Mon profil commercial et juridique sera, j'en suis certaine, un atout qui permettra d’apporter un regard neuf sur ce métier.<br/><br/>
Aujourd’hui à la recherche d’une alternance pour valider mon titre RNCP de développeuse j’espère que ces quelques lignes auront sû éveiller votre intérêt.<br/><br/>
Au plaisir de vous lire.
</p>  
                </div>
            </section>
            <section className='compétences' id="Comp">
                <p className='pComp'>Compétences</p>
                <div className='containerCompFront' id='animationCompFront'>
                    <div className='iconComp' >
                        <Code
                            size={200}
                            strokeWidth={2}
                            color={'#974063'}
                            />
                    </div>
                    <div className='cardComp'>
                        <div className='pFront' id='frontend'>Front-end</div>
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
                        <div className='pBack' id='backend'>Back-end</div>
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
                <div className='containerCompDesign' id="containerCompDesignAnimation">
                    <div className='iconComp'>
                        <PencilPlus
                        size={200}
                        strokeWidth={2}
                        color={'#FF9677'}
                        />
                    </div>
                    <div className='cardComp'>
                        <div className='pDesign' id='design'>Web design</div>
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
                <div className='containerCompEnv' id="containerCompEnvAnimation">
                    <div className='cardComp'>
                        <div className='h1Env' id='workflow'>Environnement de travail</div>
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
            <section className='réalisation' id="real">
                <p className='pReal'>Réalisations</p>
                <div className="containercardreal">
                    <div className='realisationCardFlappy' id='flappyId' onMouseOver={cardHoverFlappy} onMouseLeave={cardNotHoverFlappy}>
                        <div className='filtreRealisation'>
                            <Link to="/flappyBird" className='Linkreal'>
                                <div className='flappyButton' id='flappyButtonId'>FlappyBird
                                    <button className='hiddenButtonCardReal' id='hiddenButtonCardRealIdFlappy'>Aller voir</button>
                                </div>
                            </Link>
                        </div> 
                    </div>
                    <div className='realisationCardProjet'>
                            <div className='filtreRealisation' onMouseOver={cardHoverOhMyFood} onMouseLeave={cardNotHoverOhMyFood}>
                                <Link to="/projet3" className='Linkreal' >
                                    <div className='flappyButton' id='ohmyfoodId'>ohmyfood
                                        <button className='hiddenButtonCardReal' id='hiddenButtonCardRealIdOhMy'>Aller voir</button>
                                    </div>
                                </Link> 
                            </div> 
                    </div>
                    <div className='realisationCardPassword'>
                            <div className='filtreRealisation' onMouseOver={cardHoverPassword} onMouseLeave={cardNotHoverPassword}>
                                <Link to="/PasswordGenerator" className='Linkreal'>
                                    <div className='flappyButton' id='passwordgeneratorId'>passwordgenerator
                                        <button className='hiddenButtonCardReal' id='hiddenButtonCardRealIdPassword'>Aller voir</button>
                                    </div>
                                </Link>
                            </div> 
                    </div>
                </div>
            </section>
            <section className='contact' id='contact'>
                <div className='containerPContact'>
                    <p className='Pcontact'>Contactez-moi!</p>
                    <p className='Pactuellement'>Actuellement à la recherche d'une <strong>Alternance</strong>, je suis disponible sur <strong>Paris</strong> et sa <strong>région</strong> pour tout entretien!</p>
                </div>
                <div className='containerButtonContact'>
                    <a href={cv} download={cv} className="aDownloadContact"><button type="submit" className='ButtonDownloadContact'>Télécharger mon CV</button></a>
                    <a href="mailto:hannahazan@hotmail.fr" className='aMailContact'><button type="submit" className='ButtonMailContact'>M'envoyer un mail</button></a>
                </div>
            </section>
            <footer>   
                <p className='p2023'>Hannah Azan © 2023</p>
                <p className='droits'>Tous droits réservés</p>
            </footer>
        </main>
    </div> 

    )
}