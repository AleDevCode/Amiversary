import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-particulas',
  templateUrl: './particulas.component.html',
  styleUrls: ['./particulas.component.scss']
})
export class ParticulasComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  numVersiculo = 0;


  public versiculos = [
    {
      texto: `“El amor es paciente y bondadoso; no tiene envidia ni orgullo
     ni arrogancia. No es grosero ni egoísta,
     no se irrita ni es rencoroso;
     no se alegra de la injusticia, sino que encuentra su
     alegría en la verdad.  Todo lo disculpa, todo lo cree, todo lo espera, todo lo soporta ”`,
      cita: '1Corintios 13:4-7'
    },
    {
      texto: `“Grábame como sello en tu corazón, como sello en tu brazo;
    porque el amor es más fuerte que la muerte, la pasión más cruel que el Abismo.
    Sus llamas son flechas de fuego, intensas llamaradas.”`,
      cita: 'Cantares 8:6'
    },
    {
      texto: `“Mejor son dos que uno, pues juntos obtienen mejores resultados de sus esfuerzos.
      Porque si caen, alguno levantará al otro. Pero ¡ay, si uno cae sin nadie que lo levante!”`,
      cita: 'Eclesiastés 4:9-10'
    },
    {
      texto: `“Se comporten con gran humildad y paciencia, aceptándose mutuamente con amor.
     Preocúpense de conservar, mediante el vínculo de paz, la unidad que es fruto del Espíritu”`,
      cita: 'Efesios 4:2-3'
    },
    {
      texto: `“Si uno es atacado, dos resisten mejor, pues no se rompe fácilmente una cuerda
     trenzada con tres hilos.”`,
      cita: 'Eclesiastés 4:12'
    },
    {
      texto: `“Después el Señor Dios pensó: 'No es bueno que el hombre esté solo;
     voy a proporcionarle una ayuda adecuada'”`,
      cita: 'Génesis 2:18'
    },
    {
      texto: `“El encanto de la mujer deleita a su marido, su saber lo robustece.”`,
      cita: 'Eclesiástico 26:13'
    },
    {
      texto: `“Una mujer valiosa, ¿quién la encontrará? Es más preciosa que las perlas.”`,
      cita: 'Proverbios 31:10'
    }

  ];

  public versiculoEscogido = [];
  constructor() { }



  ngOnInit() {
    this.changeVersiculo();
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      'background-color': '#000000'
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#ffffff'
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 80,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 6,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          }
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        },
        retina_detect: true
      }
    };
  }


  changeVersiculo() {
    this.versiculoEscogido = [];
    this.numVersiculo = Math.floor(Math.random() * (this.versiculos.length - 0)) + 0;
    this.versiculoEscogido.push(this.versiculos[this.numVersiculo]);
  }


}
