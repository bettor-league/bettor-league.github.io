import logo from '../assets/img/play-store.png';

export function PlayStoreLink() {
    return (
        <a
            href="https://bettor-league.github.io"
            aria-label="Download on the App Store"
            style={{width: '140px', height: '40px'}}
        >
            <img src={logo} alt="play-store"/>
        </a>
    )
}
