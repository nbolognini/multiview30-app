import React from 'react'
import ReactPlayer from 'react-player'

export const Tlc4kPage = () => {
  return (
    <>
   
   <div class="Container-marco-gris">
          <div class="Container-marco">
                                <div class="Container-titulo">
                                  Canal26 <br></br>HLS
                                </div>


                                <div class="Container-video>">

                                <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentro4k/main.m3u8' />

                                  </div>
            </div>
      </div>












    </>


  )
}
