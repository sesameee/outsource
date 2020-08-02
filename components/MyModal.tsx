import React, { ReactElement } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        padding: '0',
    },
    overlay: {
        backgroundColor: 'rgba(82, 82, 82, 0.75)',
        zIndex: 99999,
    },
}

type MyModalProps = {
    content: ReactElement
    isOpen: boolean
    setPropIsOpenFn: any
}

const MyModal: React.FC<MyModalProps> = ({ content, isOpen, setPropIsOpenFn }: MyModalProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)

    function closeModal() {
        setIsOpen(false)
        setPropIsOpenFn(false)
    }

    React.useEffect(() => {
        setIsOpen(isOpen)
    }, [isOpen])

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button type="button" className="myModal close" onClick={closeModal}>
                    <span aria-hidden="true">
                        <i className="icon-close"></i>
                    </span>
                </button>
                {content}
            </Modal>
        </div>
    )
}
export default MyModal
