"use client";
import { translations } from "../../../translations/translations";
import Section from "../Section";

export default function Videos({ lang }) {
  const t = translations[lang]

  return (
    <Section id="videos" title={t.videos.title} muted>
      <div className="flex flex-col md:flex-row gap-8 justify-between w-full max-w-5xl mx-auto">
        {/* Video 1 */}
        <div className="w-full md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/iok9x8-iZX0?si=PCi6SaYhYykfgALI" 
            title="YouTube video 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* Video 2 */}
        <div className="w-full md:w-1/2 aspect-video">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/KIIVEtgXPkM?si=mDGSw3nh_IyZ7rdR"
            title="YouTube video 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Section>
  );
}