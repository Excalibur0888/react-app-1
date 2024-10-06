import React, {useRef} from "react";
import './Links.css'

export default function Links() {
	const stickySocialBtnRef = useRef(null);
  const stickySocialRef = useRef(null);

  const toggleOptions = () => {
		const buttonIcon = stickySocialBtnRef.current.querySelector('i');
		
		stickySocialRef.current.classList.toggle('active');
		
		if (stickySocialRef.current.classList.contains('active')) {
			buttonIcon.classList.remove('link-icon');
			buttonIcon.classList.add('close-icon');
		} else {
			buttonIcon.classList.remove('close-icon');
			buttonIcon.classList.add('link-icon');
		}
	};
	return (
		<div ref={stickySocialRef} className="sticky_social">
        <div ref={stickySocialBtnRef} className="sticky_social_btn" onClick={toggleOptions}>
          <i className="link-icon"></i>
        </div>
        <ul className="list">
          <li className="item">
            <a href="#" rel="nofollow" className="sticky_social_link" target="_blank">
              <i className="inst-icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="javascript:;" data-fancybox="" className="sticky_social_link">
              <i className="wa-icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#" rel="nofollow" className="sticky_social_link" target="_blank">
              <i className="yt-icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#" rel="nofollow" className="sticky_social_link" target="_blank">
              <i className="telegram-icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="#" rel="nofollow" className="sticky_social_link" target="_blank">
              <i className="vk-icon"></i>
            </a>
          </li>
        </ul>
      </div>
	)
}