import React from 'react';

const VideoCard = ({ videoId, title }) => (
  <div className="video-card">
    <iframe
      width="300"
      height="200"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <div className="video-title" dangerouslySetInnerHTML={{ __html: title }}></div>
  </div>
);

const VideoList = () => {
  const videos = [
    {
      videoId: 'YxuUnSo4Fzg',
      title: '<span class="text-2xl">সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন</span><br />অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ.',
    },
    {
      videoId: '5WLFPNGb6OE',
      title: '<span class="text-2xl">যতই হোক প্রশ্ন, ক্লাসেই সব সমাধান!</span><br />লাইভ ক্লাসে থাকবে ২ জন শিক্ষক! একজন পড়াবেন, আরেকজন চ্যাটে শিক্ষার্থীদের প্রশ্নের উত্তর দিবেন।.',
    },
    {
      videoId: 'xzJwVsbiNZw',
      title: '<span class="text-2xl">বাবা-মা এখন টেনশন ফ্রি!</span><br />ব্যাচে ও কী পড়ছে? কেমন করছে? সব আপডেট জানা যাবে বিষয়ভিত্তিক প্রোগ্রেস রিপোর্ট দেখে, ঘরে বসেই।',
    },
  ];

  return (
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoCard key={index} videoId={video.videoId} title={video.title} />
      ))}
      <style>{`
        .video-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center; /* Center all cards horizontally */
          align-items: center; /* Center all cards vertically */
        }
        .video-card {
            padding: 20px;
          margin: 20px;
          width: 340px; /* Reduce the card width */
          border: 1px solid #B2BEB5;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          justify-content: center; /* Center iframe and title vertically */
          align-items: center; /* Center iframe and title horizontally */
        }
        .video-card iframe {
          width: 100%; /* Make the video responsive to the card size */
          height: 200px;
        }
        .video-title {
          padding: 10px;
          text-align: center; /* Center the text within the card */
        }
      `}</style>
    </div>
  );
};

export default VideoList;