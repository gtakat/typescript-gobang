import { Howl } from 'howler'

class Sound {
  private soundBlack: Howl
  private soundWhite: Howl

  public constructor() {
    this.soundBlack = new Howl({
      src: ['/sounds/igo01.mp3'],
    })

    this.soundWhite = new Howl({
      src: ['/sounds/igo02.mp3'],
    })
  }

  public play(color: string): string|boolean {
    if (color === 'black') {
      this.soundBlack.play()
      return color
    } else if (color === 'white') {
      this.soundWhite.play()
      return color
    }
    return false
  }
}

export default new Sound()
