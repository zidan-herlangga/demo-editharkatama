import { useState, useRef } from 'react';

export default function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/music/jinggle-edith.mp3');
      audioRef.current.loop = true;
    }
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition ${
        playing ? 'bg-brand-400 text-white' : 'bg-white/80 text-gray-700 hover:bg-brand-400 hover:text-white'
      }`}
      title={playing ? 'Pause Music' : 'Play Music'}
    >
      <i className={`${playing ? 'ri-pause-line' : 'ri-music-line'} text-xl`} />
    </button>
  );
}
