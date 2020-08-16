import React from 'react'
import Gallery from 'react-grid-gallery';

import encuestas from '../assets/img/encuestas.png'
import encuestasTH from '../assets/img/encuestas_th.png'

import encuestas1 from '../assets/img/encuestas1.png'
import encuestas1TH from '../assets/img/encuestas1_th.png'

import encuestas2 from '../assets/img/encuestas2.png'
import encuestas2TH from '../assets/img/encuestas2_th.png'

import encuestas3 from '../assets/img/encuestas3.png'
import encuestas3TH from '../assets/img/encuestas3_th.png'

import firmas from '../assets/img/firmas.JPG'
import firmasTH from '../assets/img/firmas_TH.jpg'

import firmas2 from '../assets/img/firmas2.JPG'
import firmas2TH from '../assets/img/firmas2_TH.jpg'

import videochat from '../assets/img/videoconferencia.JPG'
import videochatTH from '../assets/img/videoconferencia_TH.jpg'




const IMAGES =
[{      
        src: encuestas,
        thumbnail: encuestasTH,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma de encuesta de calidad para hotel con envio de sms a los huespedes"
},
{
        src: encuestas1,
        thumbnail: encuestas1TH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma de encuesta de calidad para hotel con envio de sms a los huespedes"
},

{
        src: encuestas2,
        thumbnail: encuestas2TH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma de encuesta de calidad para hotel con envio de sms a los huespedes"
},

{
        src: encuestas3,
        thumbnail: encuestas3TH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma de encuesta de calidad para hotel con envio de sms a los huespedes"
},

{
        src: firmas,
        thumbnail: firmasTH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma para creacion de firmas personalizadas para toda la organización"
},

{
        src: firmas2,
        thumbnail: firmas2TH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "PHP",title: "PHP"},{value: "Laravel",title: "Laravel"},{value: "Blade",title: "Blade"},{value: "Boostrap",title: "Boostrap"}],
        caption: "Plataforma para creacion de firmas personalizadas para toda la organización"
},

{
        src: videochat,
        thumbnail: videochatTH,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Javascript",title: "Javascript"},{value: "ReactJS",title: "ReactJS"},{value: "Jitsi",title: "Jitsi"},{value: "Firebase",title: "Firebase"}],
        caption: "Plataforma de videoatención"
}

]




export default function Projects(){

    return (
      <div>
				<section style={{minHeight:"600px" }} className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							</div>
						</div>	
						<Gallery images={IMAGES}/>
					</div>
				</section>
      </div>
    )
  }

