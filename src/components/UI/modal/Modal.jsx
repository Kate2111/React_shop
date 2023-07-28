import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => {
    const rootClass = [classes.myModal];
    visible && rootClass.push(classes.active);
   
    return (
        <div 
            className={rootClass.join(' ')} 
            onClick={() => setVisible(false)}
        >
            <div 
                className={classes.myModalWrapper} 
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;