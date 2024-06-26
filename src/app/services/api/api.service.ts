import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //Ejemplo de manejo de variable de entorno con api dinámica
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.apiUrl}/data`).pipe(
      catchError((error) =>{
        console.error('Error al obtener datos: ', error);
        throw new Error(error);
      })
    );
  }
  //api estática
  items: Product[] = [
    {
      id: "1",
      productName: "Pase alpha kids",
      image: "assets/image/alpha-kids.png",
      icon: "assets/icon/icon-alpha-kids.png",
      price: 100,
      description: "ALPHA KIDS es un espacio seguro y atractivo para los niños, donde pueden jugar, divertirse y al mismo tiempo desarrollar hábitos de convivencia, valores sociales, habilidades intelectuales y motrices",
    },
    {
      id: "2",
      productName: "Pase baile coreográfico",
      image: "assets/image/baile-coreográfico.jpg",
      icon: "assets/icon/icon-baile-coreográfico.png",
      price: 110,
      description: "La danza moderna se basa en la interpretación y visión individual del bailarín o coreógrafo y sus movimientos son una expresión libre y fluida de estados, emociones, metáforas o ideas abstractas.",
    },
    {
      id: "3",
      productName: "Pase baloncesto",
      image: "assets/image/baloncesto.png",
      icon: "assets/icon/icon-baloncesto.png",
      price: 120,
      description: "Lleno de destreza, reflejos y agilidad, el baloncesto es uno de los deportes favoritos de los jóvenes, a travez del cual se fomenta la convivencia y el trabajo en equipo.",
    },
    {
      id: "4",
      productName: "Pase box",
      image: "assets/image/box.png",
      icon: "assets/icon/icon-box.png",
      price: 130,
      description: "En el box los protagonistas son los puños, el estado de alerta de cada combatiente es el aliado para derrocar al oponente. La adrenalina, intensidad y diversión son parte del reto de esta disciplina.",
    },
    {
      id: "5",
      productName: "Pase defensa personal",
      image: "assets/image/defensa-personal.jpg",
      icon: "assets/icon/icon-defensa-personal.png",
      price: 140,
      description: "Es un deporte de contacto que desarrolla habilidades en el alumno a través de movimientos instintivos y técnicas prácticas, para defenderse de forma rápida y efectiva contra atacantes.",
    },
    {
      id: "6",
      productName: "Pase fitness",
      image: "assets/image/fitness.jpg",
      icon: "assets/icon/icon-fitness.png",
      price: 150,
      description: "Con sus rutinas dinámicas y vitales ejercicios, Fitness te brinda diferentes opciones en sus modalidades de baile, fortalecimiento y conexión mente-cuerpo.",
    },
    {
      id: "7",
      productName: "Pase frontón",
      image: "assets/image/frontón.jpg",
      icon: "assets/icon/icon-frontón.png",
      price: 140,
      description: "Deporte conocido por su pelota vasca y su singular cancha, el frontón es todo un espectáculo para sus aficionados.",
    },
    {
      id: "8",
      productName: "Pase functional zone",
      image: "assets/image/functional-zone.jpg",
      icon: "assets/icon/icon-functional-zone.png",
      price: 130,
      description: "Sistema de acondicionamiento físico basado en ejercicios variados, con movimientos funcionales, ejecutados a alta intensidad. Desarrolla distinta capacidades físicas como agilidad y resistencia.",
    },
    {
      id: "9",
      productName: "Pase fútbol soccer",
      image: "assets/image/fútbol-soccer.jpg",
      icon: "assets/icon/icon-fútbol-soccer.png",
      price: 120,
      description: "Con millones de aficionados en México, el futbol soccer es el arte de crear estrategias en equipo para ganar. Ayuda a forjar el carácter de sus jugadores enseñándoles a plantearse metas en común.",
    },
    {
      id: "10",
      productName: "Pase gimnasia rítmica",
      image: "assets/image/gimnasia-rítmica.jpg",
      icon: "assets/icon/icon-gimnasia-rítmica.png",
      price: 110,
      description: "La gimnasia rítmica combina elementos de ballet, gimnasia y danza, y a través de movimientos creativos con el uso de diferentes aparatos generan una armonía, gracia y belleza.",
    },
    {
      id: "11",
      productName: "Pase karate do",
      image: "assets/image/karate-do.jpg",
      icon: "assets/icon/icon-karate-do.png",
      price: 100,
      description: "Un correcto giro, coordinación de fuerza, respiración y postura son claves para lograr una excelente práctica de esta arte marcial de autodefensa.",
    },
    {
      id: "12",
      productName: "Pase natación",
      image: "assets/image/natación.png",
      icon: "assets/icon/icon-natación.png",
      price: 110,
      description: "De mariposa, crol, brazo o espalda nadar siempre será la mejor opción para adoptar a tu rutina diaria y optimizar tu calidad de vida.",
    },
    {
      id: "13",
      productName: "Pase pickleball",
      image: "assets/image/pickleball.png",
      icon: "assets/icon/icon-pickleball.png",
      price: 120,
      description: "Combinación de Tenis, Padel, Bádminton y Pinpong, puede ser jugado por una persona o en parejas.",
    },
    {
      id: "14",
      productName: "Pase taekwondo",
      image: "assets/image/taekwondo.jpg",
      icon: "assets/icon/icon-taekwondo.png",
      price: 130,
      description: "No es sólo un deporte, es el arte de golpear con los pies y las manos. Esta disciplina realza el espíritu y la vida, destacando la espectacularidad de su técnica en el combate.",
    },
    {
      id: "15",
      productName: "Pase taller aéreo",
      image: "assets/image/taller-aéreo.jpg",
      icon: "assets/icon/icon-taller-aéreo.png",
      price: 140,
      description: "Unión de distintas disciplinas artísticas y deportivas que combinan la danza contemporánea, las artes circenses y ballet.",
    },
    {
      id: "16",
      productName: "Pase tenis",
      image: "assets/image/tenis.png",
      icon: "assets/icon/icon-tenis.png",
      price: 150,
      description: "El tenis, también conocido como deporte blanco por sus indicios en la realeza europea, es altamente recomendable para un fin de semana de convivencia familiar.",
    },
    {
      id: "17",
      productName: "Pase voleibol de sala",
      image: "assets/image/voleibol-de-sala.jpg",
      icon: "assets/icon/icon-voleibol-de-sala.png",
      price: 140,
      description: "Deporte donde dos equipos se enfrentan sobre un terreno de juego liso separados por una red central, tratando de pasar el balón por encima de la red hacia el suelo del campo contrario.",
    },
  ];
}
