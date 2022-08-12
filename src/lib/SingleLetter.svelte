<script>
import { tweened, spring } from 'svelte/motion'


let top = spring(0, {stiffness: 0.15, damping: 0.2})
let colors = ["hsla(332, 100%, 45%, 1)", "hsla(217, 100%, 31%, 1)"]
export let letter = 'X'
export let index = 0

function new_sample(filename) {
  let snd = new Audio()
  snd.src = filename
  snd.playbackRate = 0.6 + (0.2*index)
  snd.preservesPitch = false
  return snd
}

let voice = 0
let snd = Array(5).fill().map(() => new_sample('./samples/kalimba.wav'))


function onClick() {
  voice = (voice + 1) % 4
  snd[voice].play()
  $top = -50;
  setTimeout(() => { $top = 0 }, 100)

}

</script>

<span on:click={onClick} class="cell" style={`top: ${$top}px; color: ${index < 2 ? colors[0] : colors[1]}`}>{letter}</span>


<style>
.cell {
  position: relative;  
}


</style>