export function EmbeddedPlayer(props: {trackNumber: number, hexColor: string}) {
  let prefix = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/";
  let suffix = "&color=%23"+ props.hexColor +"&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false&show_artwork=false&single_active=true";
  return <iframe className="Soundcloud-player" title={props.trackNumber.toString()} src={prefix + props.trackNumber + suffix}></iframe>;
}
