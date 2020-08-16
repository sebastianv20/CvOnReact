import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';




export default function Timeline() {

return(
<VerticalTimeline>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Actual"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Soporte Tecnico y Desarrollador de web</h3>
    <h4 className="vertical-timeline-element-subtitle">Sinnergy Computers</h4>
    <p>
      Soporte tecnico, Redes, Servidores, Mikrotik, Desarrollos de plataformas web
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2016"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Licenciatura en Gestion de Tecnologia</h3>
    <h4 className="vertical-timeline-element-subtitle">UNLaM</h4>
    <p>
    Estudie muchas areas, desde programacion,gestion de calidad hasta Inteligencia de negocios
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Septiembre 2012"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Soporte Tecnico</h3>
    <h4 className="vertical-timeline-element-subtitle">Sinnergy Computers</h4>
    <p>
    Soporte tecnico, Redes, Servidores en Fabrica de tintas para industria alimenticia.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2011-2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Analista de sistemas</h3>
    <h4 className="vertical-timeline-element-subtitle">ISFT 185</h4>
    <p>
    Egrese gracias a los exelentes profesores especializados en varias areas profecionales afines.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Soporte tecnico</h3>
    <h4 className="vertical-timeline-element-subtitle">Bayer</h4>
    <p>
      Soporte Tecnico Informatico, Migracion masiva de equipos informaticos.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2007 - 2009"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Soporte tecnico</h3>
    <h4 className="vertical-timeline-element-subtitle">HelpDesk</h4>
    <p>
      Soporte Tecnico Informatico.
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=""
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Secundario</h3>
    <h4 className="vertical-timeline-element-subtitle">Escuela Secundaria Nº2 "Bernardino Rivadavia</h4>
    <p>
    Especializacion en economia
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
)

}