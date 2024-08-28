"use client";
import { useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Happy Birthday Love! As I sit down to write this, my heart is full of memories and emotions. It's been 5 years since we met, and from that day to today, you've been the most incredible part of my life. We've come a long way shruuuu and I really can't wait to be with you, and live a life where distance will not be a trouble for us.
Because of you, I've grown so much as a person, I can never thank you enough for that. I promise I'll always be with you in everything in your life.
You're really a gem of a person shruuu, I admire you a lot. 
That one smile on that face can literally fix my whole day, I forget everything when I am with you, you're such a fun person, I enjoy your company so much, I miss being with you.
You're an incredible dancer, you move with so much grace on the stage. Your determination for dance is really commendable, I wish I could see you dance in-person, I would be screaming like hell in front of stage from the first row.
I know I annoy you so much, I really get on your nerve but I want you to know I love you way more than that, meri jaan.
Shruuu, your touch gives me butterflies, idk how but it feels so new every time, Shruti please meet me soon, I miss you so much, I'll seriously squeeze you the next time we meet, I want to hug you so badly.
Today, on this special day, I want to remind you of how much I love you. I'm so proud of you, I feel so lucky to have you. I hope this day turns out to be as wonderful as you are, I love you so much 💗`;

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
