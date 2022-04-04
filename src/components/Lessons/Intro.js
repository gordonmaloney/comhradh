import { useState } from "react";
import { Step } from "@mui/material";
import { TransTable, VocabGrid, Title, Ex, HoverBox } from "./LessonComponents";
import { Grid } from "@mui/material";
import { Dragger, Qtranslate1, Selecter } from "./TestComponents";

export const title = ["Intro"];

export const steps = [
  "Vocab",
  "Exercises",
  "Recap"
];

export const Recap = () => {
  return <StepContent step={steps.length} />;
};

export const StepContent = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <>
          <VocabGrid
            words={[
              "word",
              "facal",
              "word",
              "facal",
              "word",
              "facal"
            ]}
            helper={[
              <>
              At the start of every section, you'll see any new vocab like this, along with some tips to help remember them or pronounce them correctly.
              </>,
              <>
                You can click the audio symbol to hear the word pronounced.
              </>,
              <>
              And where you see a wee <sup>m</sup>, you
            can hover over it to get a tip to help you memorise it.
              </>,
              <>
              Any time you like, you can click anywhere on the vocab grid to open this dialogue again.
              </>
            ]}
          />


          <p>
            To help with pronunciation, you can also open the <i>pronunciation center</i> by click the microphone button on the bottom tab.
          </p>
          <p>
            This will allow you to hear the word pronounced, as well as to record your own version so you can compare.
          </p>
          <p>
            For longer, trickier words, there'll sometimes also be an audio of the word broken down into chunks.
          </p>
          <p>
              It might seem strange at first, but these breaks downs work backwards, from the end of the word to the start - as for lots of people, that's easier to repeat.
          </p>
          <p>
            That means for a word like <i>toilichte</i>, which you'll come across in lesson 1, you'll hear something like: <i>...te, ...lichte, ...toilichte</i>. Try to repeat along with it, and you'll see how well it works!
          </p>
         </>
      );
      break;
    case 2:
      return (
        <>
        <p>Throughout the lessons, there'll be small exercises for you to do to practice what you're learning.</p>

        <p>For instance, you might be asked to put a sentence into the right order:</p>

        <Dragger sentence="put me in the right order" />

        <p>Small, interactive exercises like this will help you remember what you're learning.</p>
        </>
      );
      break;
    case 3:
      return (
        <>
        <p>Lastly, you'll see a recap of the key grammatical points of the lesson. You can go to the <i>Cheatsheet</i> from the menu to the recap sections from all the levels in the course in one place.</p>
        </>
      );
      break;
    default:
      return <></>;
  }
};

export const Content = ({ step }) => {
  return (
    <>
      <StepContent step={step} />
    </>
  );
};

export const Questions = () => {
  return (
    <>
    <p>And then once you're done learning, there'll be a test to practice everything.</p>

    <p>As you finish levels, you can mark them as completed with the checkbox in the main lesson menu, and then any new vocabulary from that section will be added to your flashcard deck.</p>

    <p>I <i>cannot stress enough</i> the difference that these flashcards will make to your learning. If you have struggled with remembering vocabulary in the past, I promise you that this will be a different experience if you make sure to revise your flashcard deck regularly.</p>

    <p>So now that we know what we're doing, here's your test:</p>

    <Selecter text="Are you ready to start? " options={["Yes", "Hell yeah!"]} correct="Hell yeah!" />
    </>
  );
};
