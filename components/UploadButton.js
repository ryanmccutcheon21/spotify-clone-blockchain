import React from 'react'

const styles = {
    uploadButton: 'bg-green-500 mr-10 px-3 py-1.5 cursor-pointer rounded-full hover:scale-95 transition'
}

const UploadButton = ({ setShowUploadMusic }) => {

    const uploadClicked = () => {
        setShowUploadMusic(true)
    }

    return (
        <div>
            <button className={styles.uploadButton} onClick={uploadClicked}>
                Upload Music
            </button>
        </div>
    )
}

export default UploadButton