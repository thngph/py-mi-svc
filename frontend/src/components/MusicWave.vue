<template>
    <div class="music-waves-2">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script>
export default {
  name: 'MusicWave',
}
</script>

<style>
    .music-waves-2 {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.music-waves-2 > span {
  display: block;
  position: relative;
  background: #000;
  height: 100%;
  width: .5rem;
  border-radius: .5rem;
  margin: 0 0.1rem;
  animation: waves-2 1.2s linear infinite;
}

.music-waves-2 > span:nth-child(1) {
  animation-delay: 0s;
  background: #ff8c00;
}

.music-waves-2 > span:nth-child(2) {
  animation-delay: 0.3s;
  background: #ffff00;
}

.music-waves-2 > span:nth-child(3) {
  animation-delay: 0.6s;
  background: #26d53a;
}

.music-waves-2 > span:nth-child(4) {
  animation-delay: 0.9s;
  background: #26e6a3;
}

.music-waves-2 > span:nth-child(5) {
  animation-delay: 0.6s;
  background: #1da8e2;
}

.music-waves-2 > span:nth-child(6) {
  animation-delay: 0.3s;
  background: #5916ba;
}

.music-waves-2 > span:nth-child(7) {
  animation-delay: 0s;
  background: #d418d9;
}

@keyframes waves-2 {
  50% {
    height: 20%;
  }

  100% {
    height: 100%;
  }
}
</style>