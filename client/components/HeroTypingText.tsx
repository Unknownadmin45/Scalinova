import { useState, useEffect } from "react";

interface TextPhase {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

interface HeroTypingTextProps {
  phases: TextPhase[];
  onAllComplete?: () => void;
}

export default function HeroTypingText({
  phases,
  onAllComplete,
}: HeroTypingTextProps) {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [completedPhases, setCompletedPhases] = useState<string[]>([]);

  const activePhase = phases[currentPhase];

  useEffect(() => {
    if (!activePhase) return;

    const startTyping = setTimeout(() => {
      setIsTyping(true);
    }, activePhase.delay || 0);

    return () => clearTimeout(startTyping);
  }, [activePhase, currentPhase]);

  useEffect(() => {
    if (!activePhase || !isTyping || currentIndex >= activePhase.text.length) {
      if (activePhase && currentIndex >= activePhase.text.length) {
        // Phase complete - add to completed phases and immediately move to next
        setCompletedPhases((prev) => [...prev, activePhase.text]);

        if (currentPhase < phases.length - 1) {
          // Move to next phase
          setTimeout(() => {
            setCurrentPhase((prev) => prev + 1);
            setDisplayedText("");
            setCurrentIndex(0);
            setIsTyping(false);
          }, 300);
        } else {
          // All phases complete
          if (onAllComplete) {
            onAllComplete();
          }
        }
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + activePhase.text[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, activePhase.speed || 50);

    return () => clearTimeout(timer);
  }, [
    currentIndex,
    isTyping,
    activePhase,
    currentPhase,
    phases.length,
    displayedText,
    onAllComplete,
  ]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span>
      {/* Render completed phases */}
      {completedPhases.map((text, index) => (
        <span key={index} className={phases[index]?.className || ""}>
          {text}
        </span>
      ))}

      {/* Render current phase only if it's not completed yet */}
      {activePhase && currentIndex < activePhase.text.length && (
        <span className={activePhase.className || ""}>
          {displayedText}
          {isTyping && (
            <span
              className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity duration-100`}
            />
          )}
        </span>
      )}

      {/* Final cursor after all phases complete */}
      {currentPhase >= phases.length - 1 &&
        activePhase &&
        currentIndex >= activePhase.text.length && (
          <span
            className={`inline-block w-0.5 h-[1em] bg-current ml-1 ${
              showCursor ? "opacity-100" : "opacity-0"
            } transition-opacity duration-100`}
          />
        )}
    </span>
  );
}
