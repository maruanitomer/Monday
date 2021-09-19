import { toast } from 'react-toastify';

export const toasting = (type, msg, timer) => {
    switch (type) {
        case 0:
            toast.error(msg, {
                position: "bottom-center",
                autoClose: timer || 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
        case 1:
            toast.success(msg, {
                position: "bottom-center",
                autoClose: timer || 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            break;
    }
}

