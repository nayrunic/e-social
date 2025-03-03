import { useMultiPageSurvey } from './hooks/useMultiPageSurvey';
import { useState, useRef, type FormEvent, type MutableRefObject} from 'react';
import { isDialogOpen, setCurrentStep } from '@/store/store';

type FormData = {
    username: string
    terms: boolean
}


type Step1Props = {
    updateFields: (fields: Partial<FormData>) => void
    errorPRef: MutableRefObject<HTMLParagraphElement>
    isLoading: boolean
}

const Step1 = ({updateFields, errorPRef, isLoading}: Step1Props) => {
    return (
        <div className="flex flex-col justify-center">
            <button type="submit" disabled={isLoading} className="cursor-pointer bg-gradient-to-br from-sky-300 to-sky-700 text-white px-5 lg:px-14 lg:py-4 sm:px-8 py-2 sm:py-3 rounded-md hover:opacity-90 transition-opacity text-sm sm:text-base lg:text-xl">
                {isLoading ? "Cargando..." : "¡Comienza ya!"}
            </button>
            <p ref={errorPRef} className="text-xs text-red-400 hidden" data-wrong></p>
            <div className="flex my-4">
                <input type="checkbox" id="terminos" name="terminos" required onChange={e => updateFields({terms: e.target.checked})}/>
                <label className="flex gap-2 px-5 text-xs max-w-72 text-center">
                    <p>Al participar en esta investigación acepto que he leído y estoy de acuerdo con el 
                    <a  href="/terms" className="text-sky-800 italic underline hover:cursor-pointer"> consentimiento informado</a></p>
                </label>
            </div>
        </div>
    )
}
const INTIAL_DATA = {
    username: "e-social-user",
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

    const handleSignIn = async (e: FormEvent, userId: string) => {
        try {
            setIsLoading(true);
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                body: JSON.stringify({...formData, username: userId})
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
            
            let userName = data.user.name ? data.user.name : "e-social-user";

            localStorage.setItem("user-name", userName);
            
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
                setCurrentStep(1);
                window.location.href = "/instructions-01";
                return;
            }

            if(!isIriDone){
                setCurrentStep(2);
                window.location.href = "/instructions-02";
                return;
            }

            if(!isMfqADone){
                setCurrentStep(3);
                window.location.href = "/instructions-03";
                return;
            }

            if(!isMfqBDone){
                setCurrentStep(4);
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

            const { error, userId } = await res.json();

            if(error){
                isDialogOpen.set(true);
                return;
            }

            await handleSignIn(e, userId);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const { steps, currentPage } = useMultiPageSurvey([Step1({updateFields, errorPRef, isLoading})]);

    return (
        <form id="signin-form" onSubmit={handleSignUp}>
            {steps[currentPage]}
        </form>
    )
}