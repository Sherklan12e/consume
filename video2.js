const player = new Plyr('#myVideo', {
    quality: {
      default: 'SD', // Establece la calidad predeterminada
      options: [
        { value: 'SD', label: 'SD', src: 'video.mp4', type: 'video/mp4' },
        { value: 'HD', label: 'HD', src: 'video_hd.mp4', type: 'video/mp4' }
      ]
    }
  });
  