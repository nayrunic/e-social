
import stimulus1 from '@/assets/stimuli/neutral_1.jpg'
import stimulus2 from '@/assets/stimuli/neutral_2.jpg'
import stimulus3 from '@/assets/stimuli/neutral_3.jpg'
import stimulus4 from '@/assets/stimuli/neutral_4.jpg'
import stimulus5 from '@/assets/stimuli/neutral_5.jpg'
import stimulus6 from '@/assets/stimuli/neutral_6.jpg'
import stimulus7 from '@/assets/stimuli/neutral_7.jpg'
import stimulus8 from '@/assets/stimuli/neutral_8.jpg'
import stimulus9 from '@/assets/stimuli/neutral_9.jpg'
import stimulus10 from '@/assets/stimuli/neutral_10.jpg'
import stimulus11 from '@/assets/stimuli/neutral_11.jpg'
import stimulus12 from '@/assets/stimuli/neutral_12.jpg'
import stimulus13 from '@/assets/stimuli/neutral_13.jpg'
import stimulus14 from '@/assets/stimuli/neutral_14.jpg'
import stimulus15 from '@/assets/stimuli/neutral_15.jpg'
import stimulus16 from '@/assets/stimuli/low_autorithy_1.jpg'
import stimulus17 from '@/assets/stimuli/low_autorithy_2.jpg'
import stimulus18 from '@/assets/stimuli/low_autorithy_3.jpg'
import stimulus19 from '@/assets/stimuli/low_autorithy_4.jpg'
import stimulus20 from '@/assets/stimuli/low_fairness_1.jpg'
import stimulus21 from '@/assets/stimuli/low_fairness_2.jpg'
import stimulus22 from '@/assets/stimuli/low_fairness_3.jpg'
import stimulus23 from '@/assets/stimuli/low_fairness_4.jpg'
import stimulus24 from '@/assets/stimuli/low_harm_1.jpg'
import stimulus25 from '@/assets/stimuli/low_harm_2.jpg'
import stimulus26 from '@/assets/stimuli/low_harm_3.jpg'
import stimulus27 from '@/assets/stimuli/low_harm_4.jpg'
import stimulus28 from '@/assets/stimuli/low_ingroup_1.jpg'
import stimulus29 from '@/assets/stimuli/low_ingroup_2.jpg'
import stimulus30 from '@/assets/stimuli/low_ingroup_3.jpg'
import stimulus31 from '@/assets/stimuli/low_ingroup_4.jpg'
import stimulus32 from '@/assets/stimuli/low_purity_1.jpg'
import stimulus33 from '@/assets/stimuli/low_purity_2.jpg'
import stimulus34 from '@/assets/stimuli/low_purity_3.jpg'
import stimulus35 from '@/assets/stimuli/low_purity_4.jpg'
import stimulus36 from '@/assets/stimuli/high_autorithy_1.jpg'
import stimulus37 from '@/assets/stimuli/high_autorithy_2.jpg'
import stimulus38 from '@/assets/stimuli/high_autorithy_3.jpg'
import stimulus39 from '@/assets/stimuli/high_autorithy_4.jpg'
import stimulus40 from '@/assets/stimuli/high_autorithy_5.jpg'
import stimulus41 from '@/assets/stimuli/high_autorithy_6.jpg'
import stimulus42 from '@/assets/stimuli/high_autorithy_7.jpg'
import stimulus43 from '@/assets/stimuli/high_fairness_1.jpg'
import stimulus44 from '@/assets/stimuli/high_fairness_2.jpg'
import stimulus45 from '@/assets/stimuli/high_fairness_3.jpg'
import stimulus46 from '@/assets/stimuli/high_fairness_4.jpg'
import stimulus47 from '@/assets/stimuli/high_harm_1.jpg'
import stimulus48 from '@/assets/stimuli/high_harm_2.jpg'
import stimulus49 from '@/assets/stimuli/high_harm_3.jpg'
import stimulus50 from '@/assets/stimuli/high_harm_4.jpg'
import stimulus51 from '@/assets/stimuli/high_ingroup_1.jpg'
import stimulus52 from '@/assets/stimuli/high_autorithy_2.jpg'
import stimulus53 from '@/assets/stimuli/high_autorithy_3.jpg'
import stimulus54 from '@/assets/stimuli/high_autorithy_4.jpg'
import stimulus55 from '@/assets/stimuli/high_purity_1.jpg'
import stimulus56 from '@/assets/stimuli/high_purity_2.jpg'
import stimulus57 from '@/assets/stimuli/high_purity_3.jpg'
import stimulus58 from '@/assets/stimuli/high_purity_4.jpg'

export interface Stimulus {
    title: string;
    image: ImageMetadata
}

export const getTitles = () => {
    const newArray = stimuli.map(({ image, ...item }) => item);
    return newArray;
}

export const stimuli: Stimulus[]= [
    
    {
        title: 'neutral_1',
        image: stimulus1
    },
    {
        title: 'neutral_2',
        image: stimulus2
    },
    {
        title: 'neutral_3',
        image: stimulus3
    },
    {
        title: 'neutral_4',
        image: stimulus4
    },
    {
        title: 'neutral_5',
        image: stimulus5
    },
    {
        title: 'neutral_6',
        image: stimulus6
    },
    {
        title: 'neutral_7',
        image: stimulus7
    },
    {
        title: 'neutral_8',
        image: stimulus8
    },
    {
        title: 'neutral_9',
        image: stimulus9
    },
    {
        title: 'neutral_10',
        image: stimulus10
    },
    {
        title: 'neutral_11',
        image: stimulus11
    },
    {
        title: 'neutral_12',
        image: stimulus12
    },
    {
        title: 'neutral_13',
        image: stimulus13
    },
    {
        title: 'neutral_14',
        image: stimulus14
    },
    {
        title: 'neutral_15',
        image: stimulus15
    },
    {
        title: 'low_autorithy_1',
        image: stimulus16
    },
    {
        title: 'low_autorithy_2',
        image: stimulus17
    },
    {
        title: 'low_autorithy_3',
        image: stimulus18
    },
    {
        title: 'low_autorithy_4',
        image: stimulus19
    },
    {
        title: 'low_fairness_1',
        image: stimulus20
    },
    {
        title: 'low_fairness_2',
        image: stimulus21
    },
    {
        title: 'low_fairness_3',
        image: stimulus22
    },
    {
        title: 'low_fairness_4',
        image: stimulus23
    },
    {
        title: 'low_harm_1',
        image: stimulus24
    },
    {
        title: 'low_harm_2',
        image: stimulus25
    },
    {
        title: 'low_harm_3',
        image: stimulus26
    },
    {
        title: 'low_harm_4',
        image: stimulus27
    },
    {
        title: 'low_ingroup_1',
        image: stimulus28
    },
    {
        title: 'low_ingroup_2',
        image: stimulus29
    },
    {
        title: 'low_ingroup_3',
        image: stimulus30
    },
    {
        title: 'low_ingroup_4',
        image: stimulus31
    },
    {
        title: 'low_purity_1',
        image: stimulus32
    },
    {
        title: 'low_purity_2',
        image: stimulus33
    },
    {
        title: 'low_purity_3',
        image: stimulus34
    },
    {
        title: 'low_purity_4',
        image: stimulus35
    },
    {
        title: 'high_autorithy_1',
        image: stimulus36
    },
    {
        title: 'high_autorithy_2',
        image: stimulus37
    },
    {
        title: 'high_autorithy_3',
        image: stimulus38
    },
    {
        title: 'high_autorithy_4',
        image: stimulus39
    },
    {
        title: 'high_autorithy_5',
        image: stimulus40
    },
    {
        title: 'high_autorithy_6',
        image: stimulus41
    },
    {
        title: 'high_autorithy_7',
        image: stimulus42
    },
    {
        title: 'high_fairness_1',
        image: stimulus43
    },
    {
        title: 'high_fairness_2',
        image: stimulus44
    },
    {
        title: 'high_fairness_3',
        image: stimulus45
    },
    {
        title: 'high_fairness_4',
        image: stimulus46
    },
    {
        title: 'high_harm_1',
        image: stimulus47
    },
    {
        title: 'high_harm_2',
        image: stimulus48
    },
    {
        title: 'high_harm_3',
        image: stimulus49
    },
    {
        title: 'high_harm_4',
        image: stimulus50
    },
    {
        title: 'high_ingroup_1',
        image: stimulus51
    },
    {
        title: 'high_ingroup_2',
        image: stimulus52
    },
    {
        title: 'high_ingroup_3',
        image: stimulus53
    },
    {
        title: 'high_ingroup_4',
        image: stimulus54
    },
    {
        title: 'high_purity_1',
        image: stimulus55
    },
    {
        title: 'high_purity_2',
        image: stimulus56
    },
    {
        title: 'high_purity_3',
        image: stimulus57
    },
    {
        title: 'high_purity_4',
        image: stimulus58
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