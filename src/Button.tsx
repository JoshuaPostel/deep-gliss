import "./Button.css"
import linux from "./linux.svg"
import windows from "./windows.svg"
import mac from "./apple.svg"

export function Linux() {
  return(
    <div className="Holder">
      <a className="Download-icon" href="https://github.com/JoshuaPostel/DeepGliss/releases/download/0.1.0/DeepGliss.so" title="linux">
        <img className="Download-icon-image" alt="ImageName" src={linux} />
      </a>
    </div>
    );
}

export function Windows() {
  return(
    <div className="Holder">
      <a className="Download-icon" href="https://github.com/JoshuaPostel/DeepGliss/releases/download/0.1.0/DeepGliss.dll" title="windows">
        <img className="Download-icon-image" alt="ImageName" src={windows} />
      </a>
    </div>
    );
}

export function Mac() {
  return(

    <div className="Holder">
    <a className="Download-icon" href="https://github.com/JoshuaPostel/DeepGliss/" title="macos">
      <img className="Download-icon-image" alt="ImageName" src={mac} />
    </a>
    </div>
    );
}
