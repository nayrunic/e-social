import { countries, studies } from "@/lib/data"
import { useMultiPageSurvey } from "./hooks/useMultiPageSurvey"
import { useState, type FormEvent } from "react"
import { isDialogOpen, setDialogData } from "@/store/store"


type Step1Props = {
    name: string
    age: string
    genre: string
    biological_sex: string
    updateFields: (fields: Partial<FormData>) => void
}

type Step2Props = {
    country: string
    studies: string
    updateFields: (fields: Partial<FormData>) => void
}

type Step3Props = {
    social_hours: string
    use_social: string
    social_since: string
    updateFields: (fields: Partial<FormData>) => void
}

const Step1 = ({name, age, genre, biological_sex, updateFields}: Step1Props) => {
    return (
        <div id="step1" className="flex flex-col gap-2 slide">
            <div>
                <label className="text-sm font-medium">
                    Nombre
                </label>
                <div className="bg-slate-200 rounded-xl p-2">
                    <input  type="text" name="name" placeholder="Escribe tu nombre..." required value={name} onChange={e => updateFields({name: e.target.value})}/>
                </div>
            </div>
            <div>
                <label className="text-sm font-medium">
                    Edad
                </label>
                <div className="bg-slate-200 rounded-xl p-2">
                    <input  type="number" name="age" id="age" placeholder="Escribe tu edad..." required value={age} onChange={e => updateFields({age: e.target.value})} />
                </div>
            </div>
            <div>
                <label className="text-sm font-medium">
                    Género
                </label>
                <div className="w-full p-2 bg-slate-200 rounded-lg text-sm">
                    <select  id="genre" name="genre" className="w-full bg-transparent" required value={genre} onChange={e => updateFields({genre: e.target.value})}>
                        <option className="text-sm" value="" disabled hidden>Selecciona tu género</option>
                        <option className="text-sm" value="man">Hombre</option>
                        <option className="text-sm" value="non-binary">No binario</option>
                        <option className="text-sm" value="woman">Mujer</option>
                        <option className="text-sm" value="not-specified">Prefiero no especificar</option>
                    </select>
                </div>
            </div>
            <div>
                <label className="text-sm font-medium">
                    Sexo
                </label>
                <div className="w-full p-2 bg-slate-200 rounded-lg text-sm">
                    <select  id="biological-sex" name="biological_sex" className="w-full bg-transparent" required value={biological_sex} onChange={e => updateFields({biological_sex: e.target.value})}>
                        <option className="text-sm" value="" disabled hidden>Selecciona tu sexo</option>
                        <option className="text-sm" value="male">Masculino</option>
                        <option className="text-sm" value="female">Femenino</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

const Step2 = ({country, studies: studyLevel, updateFields}: Step2Props) => {
    return (
        <div id="step2" className="flex flex-col gap-8 py-4 slide">
            <div>
                <label className="text-sm font-medium">
                    Nacionalidad
                </label>
                <select id="country" name="country" className="w-full p-2 bg-slate-200 rounded-lg text-sm" required value={country} onChange={e => updateFields({country: e.target.value})}>
                    <option className="text-sm" value="">Selecciona tu país</option>
                    {
                        countries.map((country, index) =>
                            <option className="text-sm" key={index} value={country}>{country}</option>
                        )
                    }
                </select>
            </div>
            <div>
                <label className="text-sm font-medium">
                    Nivel de estudios (último alcanzado)
                </label>
                <select id="studies" name="studies" className="w-full p-2 bg-slate-200 rounded-lg text-sm" required value={studyLevel} onChange={e => updateFields({studies: e.target.value})}>                                    
                    {
                        studies.map((grade, index) =>
                            <option className="text-sm" value={grade} key={index}>{grade}</option>
                        )
                    }
                </select>
            </div>     
        </div>
    )
}

const Step3 = ({use_social: useSocial, social_since: socialSince, social_hours:socialHours, updateFields}: Step3Props) => {
    return (
        <div id="step3" className="flex flex-col gap-7 slide">
            <div>
                <label className="text-sm font-medium">
                    ¿Ha usado alguna vez alguna red social?
                </label>
                <select  id="use-social" name="use_social" className="w-full p-2 bg-slate-200 rounded-lg text-sm" required value={useSocial} onChange={e => updateFields({use_social: e.target.value})}>
                    <option className="text-sm" value="" disabled hidden>Seleciona una opción</option>
                    <option className="text-sm" value="true">Si</option>
                    <option className="text-sm" value="false">No</option>
                </select>
            </div>
            <div>
                <label className="text-sm font-medium">
                 ¿Hace cuántos años utiliza redes sociales?
                </label>
                <div className="bg-slate-200 rounded-xl p-2">
                    <input className="w-full" type="number" min="0" max="35" step="1" name="social_since" id="social-since" required placeholder="Cantidad de años..." value={socialSince} onChange={e => updateFields({social_since: e.target.value})}/>
                </div>
            </div>
            <div>
                <label className="text-sm font-medium pb-1">
                    ¿Cuántas horas en promedio dedicas al día a las redes sociales?
                </label>
                <div className="bg-slate-200 rounded-xl p-2">
                    <input className="w-full" type="number" name="social_hours" id="social-hours" min="0" max="24" step="1" placeholder="Cantidad de horas..." required value={socialHours} onChange={e => updateFields({social_hours: e.target.value})}/>
                </div>
            </div>
        </div>
    )
}

type FormData = {
    name: string
    age: string
    country: string
    genre: string
    studies: string
    social_hours: string
    use_social: string
    biological_sex: string
    social_since: string
}

const INITIAL_DATA: FormData = {
    name: "",
    age: "",
    country: "",
    genre: "",
    studies: "",
    social_hours: "",
    use_social: "",
    biological_sex: "",
    social_since: "",

}

export const FormProfile = () => {

    const [formData, setFormData] = useState(INITIAL_DATA);
    const updateFields = (fields: Partial<FormData>) => {
        setFormData(prevData => {
            return {...prevData, ...fields}
        })
    }

    const { steps, currentPage, handleNext, handleBack, isLastStep, isFirstStep } = useMultiPageSurvey([Step1({...formData, updateFields}), Step2({...formData, updateFields}), Step3({...formData, updateFields})]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!isLastStep) return handleNext()

        const res = await fetch("/api/profile", {
			method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
			body: JSON.stringify({...formData})
		});

        const {error, data} = await res.json();

		if(error){
            setDialogData({title: "Error", message: error.message})
			isDialogOpen.set(true);
			return
		};

        console.log(data.user)

        if(!data.user){
            setDialogData({title: "Error", message: "Lo sentimos, hubo un error en el servidor, por favor vuelve a intentarlo."})
			isDialogOpen.set(true);
			return
        }

        window.location.href = "/instructions";
    }

    return (
        <form onSubmit={handleSubmit}>
            {
                steps[currentPage]
            }
            <div className="flex justify-center gap-4 pt-6">
                <button onClick={handleBack} 
                        type="button"
                        disabled={isFirstStep}
                        className="cursor-pointer px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed">
                            Anterior
                </button>
                <button type="submit"
                        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300">
                            {isLastStep ? "Finalizar" : "Siguiente"}
                </button>
            </div>
        </form>
    )
}