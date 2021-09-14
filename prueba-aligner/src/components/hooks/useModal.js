import { useState } from 'react';


const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)

    const newUser = () => {
        setIsOpen(true)
    };
     const closeNewUser = () => {
        setIsOpen(false)
    };

    return [isOpen, newUser, closeNewUser ]
}

export default useModal;