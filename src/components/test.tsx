import { useState, useRef } from "react";

interface CardProps {
    images: Card[]
}

interface Card {
    title: string;
    src: string;
}
export const SwipableCard = ({ images }: CardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);
    const [currentX, setCurrentX] = useState(0);
    const [transitionDirection, setTransitionDirection] = useState("");

    const imgRef = useRef<HTMLDivElement>(null);

// Handle touch start event
    const handleTouchStart = (e: any) => {
        setTouchStartX(e.pageX ?? e.touches[0].pageX);
    };

    // Handle touch move event
    const handleTouchMove = (e: any) => {
        if (touchStartX === null) return;

        const x = e.pageX ?? e.touches[0].pageX;
        imgRef.current!.classList.add('transition-none')
        const deltaX = x - touchStartX;

        setCurrentX(deltaX);

        if(currentX > 0) {
            setTransitionDirection("right")
        } else {
            setTransitionDirection("left")
        }

/*         if (currentX > 100) {
            // Swipe right (previous image)
            setCurrentIndex((prevIndex) => {
                if(currentIndex > images.length - 1) return currentIndex;
                return currentIndex + 1;
            })
        ;
            //setTouchStartX(null); // Reset touch position
        }  */
/*         else if (deltaX < -50) {
            // Swipe left (next image)
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            setTouchStartX(null); // Reset touch position
        } */

        // Determine swipe direction
/*         if (deltaX > 50) {
        // Swipe right (previous image)
            setTransitionDirection("slide-right");
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
                setTransitionDirection("");
            }, 200); // Match the duration of the transition
            setTouchStartX(null); // Reset touch position
        } else if (deltaX < -50) {
        // Swipe left (next image)
            setTransitionDirection("slide-left");
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
                setTransitionDirection("");
            }, 200); // Match the duration of the transition
            setTouchStartX(null); // Reset touch position
        } */
    };

    // Handle touch end event
    const handleTouchEnd = () => {
        
        imgRef.current!.classList.remove('transition-none')
        imgRef.current!.classList.add(`${transitionDirection === "right" ? "translate-x-full" : "-translate-x-full"}`)
        setTimeout(() => {
            imgRef.current!.classList.add('transition-none')
            imgRef.current!.classList.remove('translate-x-full')
        }, 500)

        setTouchStartX(null);
        setCurrentX(0);


    };

    const reset = (e: any) => {
        setTransitionDirection("");
        setCurrentIndex((prevIndex) => {
            if(currentIndex > images.length - 1) return currentIndex;
            return currentIndex + 1;
        })
    }


    return (
        <div className="h-full place-content-center">
            <div
                className="w-72 h-72 mx-auto overflow-hidden relative border border-gray-300 rounded-lg"
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
                onTransitionEnd={reset}
            >
                <div
                    ref={imgRef}
                    className="w-full h-full transition-transform duration-200 ease-in-out"
                    style={{
                    transform: `translateX(${currentX}px)`,
                    }}
                >
                    <img
                        src={images[currentIndex].src}
                        alt={`Slide ${currentIndex}`}
                        className="w-full h-full object-cover"
                        draggable="false" 
                    />
                </div>
            </div>
        </div>

      );
};
