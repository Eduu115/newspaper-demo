import { Injectable } from '@angular/core';

export interface Noticia {
  id: number;
  titulo: string;
  imagen: string;
  categoria: string; // Ej: Tecnología
  tipo: string;      // Ej: primary, success, danger (para los colores)
  textoCorto: string;
  textoLargo?: string;
  fecha: string;
  premium: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'El futuro de Angular',
      imagen: '/images/angular.png',
      categoria: 'Tecnología',
      tipo: 'primary', // Azul
      textoCorto: 'Descubre las novedades de la versión 21 y cómo las señales están cambiando el desarrollo web...',
      textoLargo: 'Si estás leyendo esto, es que te interesa saber qué está cocinando el equipo de Angular para el año 2025. Están a tope para que tu experiencia como desarrollador sea cada vez mejor, y para que tus aplicaciones rindan al máximo. ¿Cómo lo van a hacer? Pues tienen una estrategia muy clara: escuchar a la comunidad, analizar las tendencias del sector y, sobre todo, no parar de innovar.Eso sí, olvídate de planes rígidos e inamovibles.En un mundo tan cambiante como el de la programación, la flexibilidad es indispensable.Por eso, en Angular combinan una visión a largo plazo, con planes anuales, trimestrales y por release(hay una "major" cada 6 meses más o menos), adaptándose a las necesidades que van surgiendo. Para entender bien hacia dónde vamos, es importante saber de dónde venimos.En los últimos años, Angular ha evolucionado muchísimo, incorporando novedades como los standalone components, el control flow integrado o las signals.Y todo esto ha tenido un impacto muy positivo en la satisfacción de los desarrolladores.Pero no se duermen en los laureles.En 2025 van a seguir trabajando en áreas como la gestión de dependencias, los formularios o el testing.',
      fecha: '2025-10-25',
      premium: true
    },
    {
      id: 2,
      titulo: 'La bolsa sube hoy',
      imagen: '/images/stonks.jpg',
      categoria: 'Economía',
      tipo: 'success', // Verde
      textoCorto: 'Los mercados reaccionan positivamente a las nuevas políticas...',
      textoLargo: ' Wall Street ha cerrado al alza, pese a haber empezado la sesión con pérdidas. El índice S&P 500 ha subido un 0,54% impulsado por las ganancias de las empresas fabricantes de chips y relacionadas con la inteligencia artificial (IA) y se ha situado al cierre apenas dos puntos por debajo del máximo histórico alcanzado el martes pasado. El Nasdaq ha ganado también un 0,56% y el Dow Jones de Industriales, un 1,05%.',
      fecha: '2025-10-24',
      premium: false
    },
    {
      id: 3,
      titulo: 'Copa América',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'Un análisis exhaustivo de los equipos que llegarán a la gran final...',
      textoLargo: 'Todos los detalles sobre los partidos de la Copa América...',
      fecha: '2025-10-20',
      premium: false
    },
    {
      id: 4,
      titulo: 'Copa América',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'Un análisis exhaustivo de los equipos que llegarán a la gran final...',
      textoLargo: 'Todos los detalles sobre los partidos de la Copa América...',
      fecha: '2025-10-20',
      premium: false
    },
    {
      id: 5,
      titulo: 'Copa América',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'Un análisis exhaustivo de los equipos que llegarán a la gran final...',
      textoLargo: 'Todos los detalles sobre los partidos de la Copa América...',
      fecha: '2025-10-20',
      premium: false
    }, {
      id: 6,
      titulo: 'Copa América',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'Un análisis exhaustivo de los equipos que llegarán a la gran final...',
      textoLargo: 'Todos los detalles sobre los partidos de la Copa América...',
      fecha: '2025-10-20',
      premium: false
    },
    {
      id: 7,
      titulo: 'Copa América',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'Un análisis exhaustivo de los equipos que llegarán a la gran final...',
      textoLargo: 'Todos los detalles sobre los partidos de la Copa América...',
      fecha: '2025-10-20',
      premium: false
    }
  ];

  constructor() { }

  getAllNoticias(): Noticia[] {
    return this.noticias;
  }

  getNoticiaById(id: number): Noticia | undefined {
    return this.noticias.find(n => n.id === id);
  }
}