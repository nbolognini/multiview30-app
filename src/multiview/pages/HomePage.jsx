import ReactPlayer from 'react-player'

export const HomePage = () => {

  return (
    <>
        <div className="contenedor">
            <div className="contenedor_senales">
                <div className="contenedor_canal26">
                    <div className="title">
                        Canal26 <br></br>
                        Youtube
                        <iframe
                            width="264" 
                            height="198" 
                            src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>                    
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_canal26">
                        <div className="title">
                            Canal26<br></br>
					        HLS (nebula)<br></br><br></br>
                            <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        Canal26 Fifa Tv<br></br>
						HLS (opterCast)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_telemax">
                    <div className="title">
                        Telemax<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing={true} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                    MusicTop
						<br></br>
						HLS (nebula)<br></br><br></br>
                        <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        TierraMia
						<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        LatinaTV
						<br></br>
						HLS (nebula)<br></br><br></br>
						<ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        TLC Preview
						<br></br>
						HLS (nebula) <br></br><br></br>
						<ReactPlayer  controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        Canal26 <br></br>
                        Youtube
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        Canal26 <br></br>
                        Youtube
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        Canal26 <br></br>
                        Youtube
                    </div>
                </div>
            </div>

            <div className="contenedor_senales">
                <div className="contenedor_vacio_marco">
                    <div className="title">
                        Canal26 <br></br>
                        Youtube
                    </div>
                </div>
            </div>

























        </div>
    
    
    
    </>
  )
}
