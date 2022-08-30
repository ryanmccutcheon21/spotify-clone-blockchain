import Image from 'next/image'
import next from '../assets/next.svg'
import previous from '../assets/previous.svg'
import speaker from '../assets/speaker.svg'
import repeat from '../assets/repeat.svg'
import shuffle from '../assets/shuffle.svg'
import playRounded from '../assets/playRounded.svg'
import pauseIcon from '../assets/pause.svg'
import unsplashAlbum from '../assets/unsplashAlbum.jpg'

const styles = {
    albumCoverContainer: `w-20 h-20 mr-3`,
    mainControl: `fixed bottom-0 left-0 py-3 p-5 pr-10 w-screen bg-[#242424] z-40 flex items-center justify-between`,
    flexCenter: `flex items-center`,
    controlIcon: `mr-5 cursor-pointer hover:opacity-100 opacity-50`,
    controlIconContainer: `flex items-center justify-center mb-2`,
    playIcon: `mr-5 w-10 cursor-pointer hover:opacity-50`,
    pauseIconStyle: `mt-3 w-10 h-10 cursor-pointer hover:opacity-50`,
    coverPhoto: `object-cover`
}

const PlayerControls = () => {
    return (
        <div className={styles.mainControl}>
            <div className={styles.flexCenter}>
                <div className={styles.albumCoverContainer}>
                    <Image
                        src={unsplashAlbum}
                        height={200}
                        width={200}
                        alt='song-cover'
                    />
                </div>
                <div>
                    <p>Current Song</p>
                    <p className='opacity=50'>artist</p>
                </div>
            </div>
            <div>
                <div className={styles.controlIconContainer}>
                    <div className={styles.controlIcon}>
                        <Image
                            src={shuffle}
                            alt='shuffle'
                        />
                    </div>
                    <div className={styles.controlIcon}>
                        <Image
                            src={previous}
                            alt='previous'
                        />
                    </div>
                    <div className={styles.controlIcon}>
                        <Image
                            src={next}
                            alt='next'
                        />
                    </div>
                    <div className={styles.controlIcon}>
                        <Image
                            src={repeat}
                            alt='repeat'
                        />
                    </div>
                </div>
                <div className={styles.flexCenter}>
                    <small>1:30</small>
                    <input
                        type='range'
                        className={styles.range}
                    />
                    <small>2:43</small>
                </div>
            </div>
            <div>
                <div className={styles.flexCenter}>
                    <Image
                        src={speaker}
                        alt='speaker'
                    />
                    <input
                        type='range'
                        id='volume-range'
                    />
                </div>
            </div>
        </div>
    )
}

export default PlayerControls