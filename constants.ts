
import { ClassFeature, Testimonial, VideoThumbnail } from './types';

export const FEATURES: ClassFeature[] = [
  {
    id: '1',
    title: 'Flexibilidad Total',
    description: 'Combina clases presenciales en mi estudio con sesiones online vía Zoom de alta fidelidad. Tú decides según tu semana.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    id: '2',
    title: 'Curriculum a Medida',
    description: 'No uso el mismo libro para todos. Creamos un camino basado en tus gustos musicales, ya sea Rock, Jazz o Flamenco.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    id: '3',
    title: 'Teoría Aplicada',
    description: 'La armonía y el lenguaje musical se aprenden tocando. Nada de pizarras aburridas, todo tiene aplicación inmediata.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    id: '4',
    title: 'Grabación de Sesiones',
    description: 'Cada clase puede ser grabada para que puedas repasar los ejercicios y explicaciones tranquilamente en casa.',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
  },
  {
    id: '5',
    title: 'Sesiones de 60 min',
    description: 'Tiempo real para calentar, aprender técnica nueva y trabajar en repertorio. Sin prisas, disfrutando el proceso.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: '6',
    title: 'Apoyo 24/7 vía WhatsApp',
    description: '¿Dudas con un acorde a mitad de semana? Mis alumnos tienen línea directa conmigo para resolver cualquier bloqueo.',
    icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Sanz',
    role: 'Alumno de Eléctrica',
    text: 'Paco tiene una paciencia infinita. Llevaba años estancado con las escalas y en dos meses me ha dado la clave para improvisar con sentido.'
  },
  {
    id: '2',
    name: 'Marta Jiménez',
    role: 'Principiante',
    text: 'Empecé de cero a los 45 años. Pensaba que era tarde, pero con su metodología ya toco mis temas favoritos de los 80. ¡Un lujo!'
  },
  {
    id: '3',
    name: 'Dani López',
    role: 'Alumno Online',
    text: 'La calidad del audio en las clases online es perfecta. Es como estar en la misma sala. Paco se adapta a mis horarios de trabajo perfectamente.'
  }
];

export const VIDEOS: VideoThumbnail[] = [
  { id: '1', title: 'Improvisación Blues', imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop', videoUrl: '#' },
  { id: '2', title: 'Fingerstyle Clásico', imageUrl: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=800&auto=format&fit=crop', videoUrl: '#' },
  { id: '3', title: 'Técnica de Púa', imageUrl: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=800&auto=format&fit=crop', videoUrl: '#' },
];
