import userIcon from '@/assets/icons/user.svg';
import { useMultiPageSurvey } from './hooks/useMultiPageSurvey';
import { useState, useRef, type FormEvent, type MutableRefObject} from 'react';
import { isDialogOpen } from '@/store/store';

type FormData = {
    username: string
    terms: boolean
}


type Step1Props = {
    updateFields: (fields: Partial<FormData>) => void
    errorPRef: MutableRefObject<HTMLParagraphElement>
}

const Step1 = ({updateFields, errorPRef}: Step1Props) => {
    return (
        <div>
            <h2 className="mb-10 font-bold text-4xl text-sky-800 landscape:pt-10">Iniciar Sesión</h2>
            <p className="mb-2 font-bold text-xl text-sky-400">Crea tu usuario</p>
            <div className="bg-slate-200 rounded-3xl mb-5">
                <div className="flex gap-2 items-center p-2">
                    <img className="w-6 h-6 rounded-full" src={userIcon.src} />
                    <input id="username" className="outline-0 bg-none border-0 text-slate-700 max-w-54 placeholder:text-gray-400 placeholder:pb-4" required type="text" name="username" placeholder="Usuario" onChange={e => updateFields({username: e.target.value})}/>
                </div>
            </div>
            <p className="landscape:mb-10 mb-20 font-bold text-sm text-gray-400">
                Si ya tienes un usuario, <br/> puedes usarlo para iniciar sesion
            </p>
            <p ref={errorPRef} className="text-xs text-red-400 hidden" data-wrong></p>
            <div className="flex">
                <input type="checkbox" id="terminos" name="terminos" required onChange={e => updateFields({terms: e.target.checked})}/>
                <label className="flex gap-2 px-5 text-xs max-w-72">
                    <p>Al entrar a la plataforma acepto que he leído y estoy de acuerdo con el 
                    <a  href="/terms" className="text-sky-800 italic underline hover:cursor-pointer">consentimiento informado</a></p>
                </label>
            </div>
        </div>
    )
}
const INTIAL_DATA = {
    username: "",
    terms: false
}

export const LoginForm = () => {
    const [formData, setFormData] = useState(INTIAL_DATA);
    const [isLoading, setIsLoading] = useState(false);

    const updateFields = (fields: Partial<FormData>) => {
        setFormData(prevData => {
            return {...prevData, ...fields}
        })
    }
    const errorPRef = useRef<any>();
    
    const { steps, currentPage } = useMultiPageSurvey([Step1({updateFields, errorPRef})]);

    const handleSignIn = async (e: FormEvent) => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                body: JSON.stringify(formData)
            });

            const {error, data} = await res.json();

            if(error){
                if(errorPRef){
                    errorPRef.current.classList.remove("hidden");
                    errorPRef.current.innerHTML = error.message;
                }
                return;
            }

            let isUserProfileComplete = false;
            let isFeedDone = false;
            let isRmitDone = false;
            let isIriDone = false;
            let isMfqADone = false;
            let isMfqBDone = false;

            localStorage.setItem("user-name", data.user.name);
            
            isUserProfileComplete = data.user.profile_completed;
            isFeedDone = data.user.feed_done;
            isRmitDone = data.user.RMIT_done;
            isIriDone = data.user.IRI_done;
            isMfqADone = data.user.MFQ_1_done;
            isMfqBDone = data.user.MFQ_2_done;

            if(!isUserProfileComplete){
                window.location.href = "/profile";
                return;
            }

            if(!isFeedDone){
                window.location.href = "/instructions";
                return;
            }

            if(!isRmitDone){
                window.location.href = "/instructions-01";
                return;
            }

            if(!isIriDone){
                window.location.href = "/instructions-02";
                return;
            }

            if(!isMfqADone){
                window.location.href = "/instructions-03";
                return;
            }

            if(!isMfqBDone){
                window.location.href = "/instructions-04";
                return;
            }

            window.location.href = "/end";

        } finally {
            setIsLoading(false);
        }
    }

    const handleSignUp = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const { error } = await res.json();

            if(error){
                isDialogOpen.set(true);
                return;
            }

            await handleSignIn(e);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    return (
        <form id="signin-form" onSubmit={handleSignUp}>
            {steps[currentPage]}
            <div className="flex justify-center gap-4 pt-6">
                <button 
                    type="submit"
                    disabled={isLoading}
                    className="cursor-pointer px-8 py-2 bg-sky-300 text-white rounded-3xl hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Cargando..." : "Entrar"}
                </button>
            </div>
        </form>
    )
}