"use client";
import { useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Happy Birthday Love! As I sit down to write this, my heart is full of memories and emotions. It's been 5 years since we met, and from that day to today, you've been the most incredible part of my life. We've come a long way shruuuu and I really can't wait to be with you, and live a life where distance will not be a trouble for us.
Because of you, I've grown so much as a person, I can never thank you enough for that.i promise I'll always be with youu in everything in your life.
you're really a gem of a person shruuu, I admire you alott. 
That one smile on that face can literally fix my whole day, I forget everything when I am with youu, you're such a fun person, I enjoy your company so muchh, I miss being with you.
You're a fucking incredible dancer, you move with soo much grace on the stage. Your determination for dance is really commendable, I wish I could see you dance in-person, I would be screaming like hell in front of stage from the first row.
I know I annoy you soo much, i really get on your nerve but I want you to know I love youu you way more than thattt meri jaan.
Shruuu , your touch gives me soo much butterflies, idk how but it feels soo neww everytime, shrutiii please meet me soon I misss youuu sooo soo much, I'll seriously squeeze you the next time we meet, i want to hug you so badlyy.
Today, on this special day, I want to remind you of how much I love you. I'm soo proud of youuu, I feel so lucky to have you. I hope this day turns out to be as wonderful as you are, I love You soo much💗`;

export function TextGenerateEffectDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="generate">
    <button onClick={openDialog} className="message-button">Message</button>
    {isOpen && (
      <div className="dialog">
        <div className="dialog-content">
          <TextGenerateEffect words={words} />
          <button onClick={closeDialog} className="close-button">Close</button>
        </div>
      </div>
    )}
    </div>
  );
}
