import React from 'react';
import  { useSpring, animated } from 'react-spring';
import * as S from './styles';

export const Modal = ({ children, isOpen, onClose, img }) => {
    // Use useref to get the modal element
    const modalRef = React.useRef();

    //const animate use useSpring to animate the modal
    const animate = useSpring({
        config:{
            duration: 250
        },
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-100%)'
    });

    // Add event listener to close the modal when the user clicks outside of it
    const closeModal = e => {
        if(modalRef.current === e.target) {
            onClose(false);
        }
    }

    // Add event listener to close the modal when the user presses the esc key
    const keyPress = React.useCallback(e => {
        if(e.keyCode === 27 && e.key === 'Escape' && isOpen) {
            onClose(false);
        }
    }, [onClose, isOpen]);

    // Add useEffect to remove event listeners
    React.useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return(
        <React.Fragment>
            {isOpen ? (
                <S.Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animate}>
                        <S.ModalWrapper>
                            <S.ModalImg src={img} alt="Camara"/>
                            <S.ModalContent>{children}</S.ModalContent>
                            <S.CloseModalButton aria-label='Close Modal' onClick={() => onClose(prev => !prev)} />
                        </S.ModalWrapper>
                    </animated.div>
                </S.Background>
            ) : null}
        </React.Fragment>
    )
}
