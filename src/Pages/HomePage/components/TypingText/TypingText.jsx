import React, { useState, useEffect } from "react";
import './TypingText.css'

const TypingText = () => {
	const [text, setText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [index, setIndex] = useState(0);
	const [phrases] = useState([
		"Explore the Secrets of the Universe with Silentlib: Your Gateway to Infinite Learning",
		"Expand Your World with the Ultimate Knowledge Source: Silentlib",
	]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (isDeleting) {
				setText((prev) => prev.slice(0, -1));
			} else {
				setText((prev) => phrases[index].slice(0, prev.length + 1));
			}

			if (!isDeleting && text === phrases[index]) {
				setIsDeleting(true);
			} else if (isDeleting && text === "") {
				setIsDeleting(false);
				setIndex((prev) => (prev === phrases.length - 1 ? 0 : prev + 1));
			}
		}, 100);

		return () => clearInterval(intervalId);
	}, [index, isDeleting, phrases, text]);

	return <h4 className="text">{text}</h4>;
};

export default TypingText;
