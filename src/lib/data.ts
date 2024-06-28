
import stimulus1 from '@/assets/stimuli/1.jpg'
import stimulus2 from '@/assets/stimuli/2.jpg'
import stimulus3 from '@/assets/stimuli/3.jpg'

export interface Stimulus {
    title: string;
    image: ImageMetadata
}

export const stimuli: Stimulus[]= [
    {
        title: 'Stimulus 1',
        image: stimulus1
    },
    {
        title: 'Stimulus 2',
        image: stimulus2
    },
    {
        title: 'Stimulus 3',
        image: stimulus3
    }
]

export const countries: string[] = [
    'Argentina',
    'Bolivia',
    'Brasil',
    'Chile',
    'Colombia',
    'Costa Rica',
    'Cuba',
    'Ecuador',
    'El Salvador',
    'España',
    'Guatemala',
    'Honduras',
    'México',
    'Nicaragua',
    'Panamá',
    'Paraguay',
    'Perú',
    'Puerto Rico',
    'República Dominicana',
    'Uruguay',
    'Venezuela',
    'Otro'
]

export const studies: string[] = [
    'Ninguno',
    'Educación Básica Primaria',
    'Educación Básica Secundaria',
    'Bachiller',
    'Técnico',
    'Tecnología',
    'Pregrado',
    'Especialización',
    'Maestría',
    'Doctorado'
]