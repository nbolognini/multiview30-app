import React from 'react'
import ReactPlayer from 'react-player'

export const TierramiaPage = () => {
  return (
    <>
   
   <div class="Container-marco-gris">
                  <div class="Container-marco">
                                    <div class="Container-titulo">
                                    TierraMia <br></br> HLS
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />
    
                                      </div>
                </div>
    </div>
    
    <div class="Container-marco-gris">
                <div class="Container-marco">
                                    <div class="Container-titulo">
                                    TierraMia <br></br> (Wowza)
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='http://live-edge01.telecentro.net.ar/live/smil:trm.smil/playlist.m3u8' />
    
                                      </div>
                </div>
    </div>


    <div class="Container-marco-negro">
      </div>


      <div class="Container-marco-negro">
      </div>


    </>


  )
}
