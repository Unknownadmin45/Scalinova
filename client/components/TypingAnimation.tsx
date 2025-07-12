import { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export default function TypingAnimation({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);

  useEffect(() => {
    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTyping);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) {
      if (currentIndex >= text.length && onComplete) {
        onComplete();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    if (!showCursor) return;

    const cursorTimer = setInterval(() => {
      setShowBlinkingCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && isTyping && (
        <span
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
            showBlinkingCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        />
      )}
      {showCursor && !isTyping && currentIndex >= text.length && (
        <span
          className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
            showBlinkingCursor ? "opacity-100" : "opacity-0"
          } transition-opacity duration-100`}
        />
      )}
    </span>
  );
}
