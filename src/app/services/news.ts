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
      titulo: 'Prohibicion a Redes',
      imagen: '/images/PedroSanchez.png',
      categoria: 'Politica',
      tipo: 'secondary', // Gris
      textoCorto: 'Sánchez anuncia que España prohibirá el acceso a plataformas digitales a menores de 16 años...',
      textoLargo: 'El presidente del Gobierno, Pedro Sánchez, ha anunciado este martes que su Gobierno va a prohibir el acceso a las redes sociales a los menores de 16 años en el Consejo de Ministros de la semana que viene, obligando a las plataformas digitales a implementar sistemas efectivos de verificación de edad. "Vamos a devolver las redes sociales a esa tierra prometida que nunca debieran haber abandonado", ha asegurado el jefe del Ejecutivo.',
      fecha: '03-02-2026',
      premium: false
    },
    {
      id: 5,
      titulo: 'EL Australian Open',
      imagen: '/images/carlosAlcaraz.jpg',
      categoria: 'Deportes',
      tipo: 'danger', // Rojo
      textoCorto: 'El Ganador de la Australian Open, completador del Grand Slam con récord y el que agranda la leyenda del tenis español al sumar el título número 47...',
      textoLargo: 'Carlos Alcaraz ha vuelto a escribir una página dorada en la historia del tenis mundial. Tras su reciente victoria en el Open de Australia, el tenista español ha completado el Grand Slam en su carrera, un hito que muy pocos han logrado y que lo consagra como el jugador más joven en conquistar los cuatro grandes torneos: Roland Garros, Wimbledon, el US Open y el Abierto de Australia. Este triunfo eleva su cuenta personal a siete grandes.',
      fecha: '02-02-2026',
      premium: false
    }, 
    {
      id: 6,
      titulo: 'La Fiscalía de París registra las oficinas de X',
      imagen: '/images/elonMusk.jpg',
      categoria: 'Tecnología',
      tipo: 'primary', // Azul
      textoCorto: 'La Fiscalía de París registra las oficinas de X en Francia y convoca a Elon Musk para que declare por manipulación de algoritmos...',
      textoLargo: 'La Fiscalía de París anunció este martes que está registrando las oficinas de la red social X en Francia dentro de una investigación abierta en enero del año pasado para averiguar si manipuló su algoritmo para facilitar una injerencia extranjera al favorecer determinados contenidos. La unidad de delitos informáticos de la Fiscalía realiza los registros junto con Europol y la propia unidad de delitos informáticos de la policía francesa.',
      fecha: '03-02-2026',
      premium: false
    },
    {
      id: 7,
      titulo: 'Pedro Sánchez responde a los ataques de Elon Musk y Pável Dúrov',
      imagen: '/images/sanchezVSelon.jpg',
      categoria: 'Politica',
      tipo: 'secondary', // Gris
      textoCorto: 'El ataque del magnate y millonario Elon Musk al presidente, Pedro Sánchez, debido a  que prohibirá en España el acceso a las redes sociales a los menores de 16 años....',
      textoLargo: 'Mucho se había estado hablando del ataque del magnate y millonario Elon Musk al presidente del Gobierno, Pedro Sánchez, a cuenta de su anuncio de que prohibirá en España el acceso a las redes sociales a los menores de 16 años. Por si fuera poco, Pavel Durov, millonario ruso y dueño de la red social Telegram, también ha atacado al jefe del Ejecutivo. Ha sido este miércoles cuando la propia app ha enviado un mensaje a todos los usuarios avisando de una "alarma roja" para la libertad de expresión y privacidad: "Manteneos vigilantes, España".  Ahora ha sido Pedro Sánchez el que ha contraatacado, y de qué manera, al publicar un tuit contestando a los dos multimillonarios con una frase que posiblemente pasará a la historia, haciendo una referencia "Deja que los tecno-oligarcas ladren, Sancho, es una señal de que cabalgamos".',
      fecha: '04-02-2026',
      premium: false
    },
    {
      id: 8,
      titulo: 'El Gobierno aprueba a dos Decretos',
      imagen: '/images/copaAmerica.jpg',
      categoria: 'Economía',
      tipo: 'success', // Verde
      textoCorto: 'El Gobierno se decanta finalmente por aprobar hoy dos decretos, uno de pensiones y otro con el escudo social...',
      textoLargo: 'El Gobierno ha decidido finalmente aprobar en el Consejo de Ministros de este martes dos decretos, separando la subida de las pensiones del resto de medidas del llamado escudo social, según han confirmado a Europa Press en fuentes del Ejecutivo. En concreto, por un lado, se aprobará el decreto de revalorización de las pensiones para 2026, de otras prestaciones y cotizaciones, incluyendo la congelación de cuotas para los autónomos, y por otro, otro decreto con las medidas del escudo social y otras medidas de protección.',
      fecha: '03-02-2026',
      premium: false
    },
    {
      id: 9,
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