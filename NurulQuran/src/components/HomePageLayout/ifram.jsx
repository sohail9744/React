function Frame() {
  return (
    <div className="flex gap-5 justify-center items-center rounded">
      <span>
        <iframe
          className="w-full aspect-[4/3]"
          src="https://www.youtube.com/embed/umumgTfRt_U"
        ></iframe>
      </span>
      <span>
        <iframe
          className="w-full aspect-[4/3]"
          src="https://www.youtube.com/embed/umumgTfRt_U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </span>
      <span>
        <iframe
          className="w-full aspect-[4/3]"
          src="https://www.youtube.com/embed/umumgTfRt_U"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </span>
    </div>
  );
}

export default Frame;
