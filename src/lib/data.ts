import stimulus3 from '@/assets/stimuli/neutral_3.jpg'
import stimulus4 from '@/assets/stimuli/neutral_4.jpg'
import stimulus5 from '@/assets/stimuli/neutral_5.jpg'
import stimulus9 from '@/assets/stimuli/neutral_9.jpg'
import stimulus10 from '@/assets/stimuli/neutral_10.jpg'
import stimulus11 from '@/assets/stimuli/neutral_11.jpg'
import stimulus12 from '@/assets/stimuli/neutral_12.jpg'
import stimulus13 from '@/assets/stimuli/neutral_13.jpg'
import stimulus18 from '@/assets/stimuli/low_autorithy_3.jpg'
import stimulus19 from '@/assets/stimuli/low_autorithy_4.jpg'
import stimulus20 from '@/assets/stimuli/low_fairness_1.jpg'
import stimulus23 from '@/assets/stimuli/low_fairness_4.jpg'
import stimulus24 from '@/assets/stimuli/low_harm_1.jpg'
import stimulus25 from '@/assets/stimuli/low_harm_2.jpg'
import stimulus26 from '@/assets/stimuli/low_harm_3.jpg'
import stimulus27 from '@/assets/stimuli/low_harm_4.jpg'
import stimulus29 from '@/assets/stimuli/low_ingroup_2.jpg'
import stimulus30 from '@/assets/stimuli/low_ingroup_3.jpg'
import stimulus31 from '@/assets/stimuli/low_ingroup_4.jpg'
import stimulus32 from '@/assets/stimuli/low_purity_1.jpg'
import stimulus33 from '@/assets/stimuli/low_purity_2.jpg'
import stimulus34 from '@/assets/stimuli/low_purity_3.jpg'
import stimulus35 from '@/assets/stimuli/low_purity_4.jpg'
import stimulus39 from '@/assets/stimuli/high_autorithy_4.jpg'
import stimulus40 from '@/assets/stimuli/high_autorithy_5.jpg'
import stimulus41 from '@/assets/stimuli/high_autorithy_6.jpg'
import stimulus42 from '@/assets/stimuli/high_autorithy_7.jpg'
import stimulus44 from '@/assets/stimuli/high_fairness_2.jpg'
import stimulus45 from '@/assets/stimuli/high_fairness_3.jpg'
import stimulus46 from '@/assets/stimuli/high_fairness_4.jpg'
import stimulus47 from '@/assets/stimuli/high_harm_1.jpg'
import stimulus48 from '@/assets/stimuli/high_harm_2.jpg'
import stimulus53 from '@/assets/stimuli/high_ingroup_3.jpg'
import stimulus54 from '@/assets/stimuli/high_ingroup_4.jpg'
import stimulus55 from '@/assets/stimuli/high_purity_1.jpg'
import stimulus56 from '@/assets/stimuli/high_purity_2.jpg'
import stimulus57 from '@/assets/stimuli/high_purity_3.jpg'
import stimulus58 from '@/assets/stimuli/high_purity_4.jpg'

import profile1 from '@/assets/misc/profile_pictures/1.jpg'
import profile2 from '@/assets/misc/profile_pictures/2.jpg'
import profile3 from '@/assets/misc/profile_pictures/3.jpg'
import profile4 from '@/assets/misc/profile_pictures/4.jpg'
import profile5 from '@/assets/misc/profile_pictures/5.jpg'
import profile6 from '@/assets/misc/profile_pictures/6.jpg'
import profile7 from '@/assets/misc/profile_pictures/7.jpg'
import profile8 from '@/assets/misc/profile_pictures/8.jpg'
import profile9 from '@/assets/misc/profile_pictures/9.jpg'
import profile10 from '@/assets/misc/profile_pictures/10.jpg'
import profile11 from '@/assets/misc/profile_pictures/11.jpg'
import profile12 from '@/assets/misc/profile_pictures/12.jpg'
import profile13 from '@/assets/misc/profile_pictures/13.jpg'
import profile14 from '@/assets/misc/profile_pictures/14.jpg'
import profile15 from '@/assets/misc/profile_pictures/15.jpg'
import profile16 from '@/assets/misc/profile_pictures/16.jpg'
import profile17 from '@/assets/misc/profile_pictures/17.jpg'
import profile18 from '@/assets/misc/profile_pictures/18.jpg'
import profile19 from '@/assets/misc/profile_pictures/19.jpg'
import profile20 from '@/assets/misc/profile_pictures/20.jpg'

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

export const usernames: string[] = ["SkyFusion_24",
    "nova_Eclipse21",
    "QuantumWaveX",
    "silentEcho7",
    "DriftMotion88",
    "pulseShift_09",
    "CloudRippleX",
    "prismVortex42",
    "AeroSphere12",
    "Starflow_X7",
    "FluxVector99",
    "crystalVibe_5",
    "neonBreeze04",
    "SolarArc_13",
    "NovaGlide73",
    "zeroGravity_X1",
    "SilentSync_8",
    "PulseOrbit45",
    "Cloudwave_56",
    "TechSurge23",
    "Zen_Flux44",
    "neonPulse_32",
    "PrismZen_X5",
    "quantumDrift_9",
    "EchoShift24",
    "SilverCurrent_3",
    "FusionPath97",
    "OrbitPulse_2",
    "CrystalEcho72",
    "SilentNova_01",
    "Starwave_39",
    "PulseVectorX3",
    "aeroZenith_7",
    "lightSurge_11",
    "PrismGlow21",
    "fluxShift_X9",
    "RadiantCycle76",
    "zenOrb_19",
    "NovaVector_0",
    "SolarSync_89",
    "AeroLoom_14",
    "EchoRiseX6",
    "VoidStream_27",
    "PureShift_18",
    "electroWave_6",
    "zenMotion94",
    "LunarCascade_20",
    "CircuitGlide_88",
    "InfiniteArc_07",
    "VectorRiseX2",
    "LightLoom_36",
    "Starflow_zero"]

export const profile_images: string[] = [profile1.src, 
    profile2.src, 
    profile3.src,
    profile4.src,
    profile5.src,
    profile6.src,
    profile7.src,
    profile8.src,
    profile9.src,
    profile10.src,
    profile11.src,
    profile12.src,
    profile13.src,
    profile14.src,
    profile15.src,
    profile16.src,
    profile17.src,
    profile18.src,
    profile19.src,
    profile20.src]