import React, { useState, useEffect } from "react";
import './TypingText.css'

const TypingText = (props) => {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [index, setIndex] = useState(0);
	const [phrases] = useState([`${props.phr1}`, `${props.phr2}`]);

	useEffect(() => {
		let intervalId;
	
		if (!isDeleting && text === phrases[index]) {
			intervalId = setTimeout(() => setIsDeleting(true), 2000);
		} else if (isDeleting && text === "") {
			setIsDeleting(false);
			setIndex((prev) => (prev === phrases.length - 1 ? 0 : prev + 1));
		} else {
			intervalId = setInterval(() => {
				if (isDeleting) {
					setText((prev) => prev.slice(0, -1));
				} else {
					setText((prev) => phrases[index].slice(0, prev.length + 1));
				}
			}, 50);
		}
	
		return () => clearInterval(intervalId);
	}, [index, isDeleting, phrases, text]);

	return <h4 className="text">{text}</h4>;
};

export default TypingText;
