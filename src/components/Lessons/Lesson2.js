import { Step } from "@mui/material";
import {
  TransTable,
  VocabGrid,
  Title,
  Ex,
  HoverBox,
  Table,
  MathBox,
} from "./LessonComponents";
import { Dragger, Qtranslate1, Selecter } from "./TestComponents";

import { WORDS } from "./WORDS";
import { Studier } from "../Flashcards/Studier";

export const steps = [
  "A bheil…?",
  "Nach eil…?",
  "More people",
  "Joining words",
  "Recap",
];

export const Recap = () => {
  console.log("test");
  return <StepContent step={steps.length} />;
};

export const title = "Questions";

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <div>
          <p>
            In the last lesson, we learnt that <em>tha</em> means{" "}
            <em>am, are </em>and <em>is, </em>and that <em>chan eil</em> means{" "}
            <em>am not, are not, </em>and<em> is not</em>. Now we will learn how
            to ask questions.
          </p>
          <p>
            The important thing to remember here is that the word-order still
            doesn&rsquo;t change - the verb still comes before the subject -
            it&rsquo;s just that we have special forms of the verb to indicate
            that it&rsquo;s a question.
          </p>
          <p>
            The question form of <em>tha</em> is <em>a bheil</em> - so that
            could be translated as <em>is&hellip;?, am&hellip;? </em>or{" "}
            <em>are&hellip;?</em>
          </p>

          <VocabGrid words={["are/am/is?", "a bheil?"]} />

          <p>This is easiest to demonstrate with some examples:</p>
          <TransTable
            words={[
              "Tha mi mòr",
              "I am big",
              "A bheil mi mòr?",
              "Am I big?",
              "Tha Calum sgìth",
              "Calum is tired",
              "A bheil Calum sgìth?",
              "Is Calum tired?",
            ]}
          />
        </div>
      );
      break;
    case 2:
      return (
        <>
          <p>
            Just like <em>a bheil</em> is the question form of <em>tha</em>, we
            have a question form of <em>chan eil</em>: <em>nach eil</em>.
          </p>

          <VocabGrid words={["are/am/is not?", "nach eil?"]} />

          <p>Again, this is easiest to demonstrate with examples.</p>

          <TransTable
            words={[
              "Chan eil mi beag",
              "I am not small",
              "Nach eil mi beag?",
              "Am I not small?",
              "Chan eil Anna brònach",
              "Anna isn't sad",
              "Nach eil Anna brònach?",
              "Isn't Anna sad?",
            ]}
          />
          <p>
            So we&rsquo;ve learnt four forms of the verb <em>to be</em>, for
            positive and negative and for statements and questions. We can
            capture this in a neat wee graph:
          </p>
          <Table
            row1={["Tha - to be", "! (statement)", "? (question)"]}
            row2={["+ (positive)", "tha", "a bheil?"]}
            row3={["- (negative)", "chan eil", "nach eil?"]}
          />

          <p>
            We will be coming across charts like this a lot, because most verbs
            in Gaelic conform to a very similar structure - though it is worth
            noting here that <em>tha</em> is very irregular, and that for most
            verbs the forms are much more predictable.
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            We learnt <em>I</em> and <em>you</em> in the last lesson. Now
            let&rsquo;s learn the other pronouns:
          </p>
          <VocabGrid
            words={[
              "he",
              "e",
              "she",
              "i",
              "we",
              "sinn",
              "you (plural, formal)",
              "sibh",
              "they",
              "iad",
            ]}
          />
          <p>
            Just like with the pronouns and names we&rsquo;ve already learnt,
            these pronouns fit into sentences in exactly the same way - they
            don&rsquo;t change the word order or any of the other words in the
            sentence.
          </p>
          <p>So if:</p>
          <Ex gd="Tha mi sgìth" />

          <p>
            Means:
            <Ex en="I am tired" />
          </p>
          <p>Can you work out how to say these sentences?</p>

          <HoverBox en="We are tired" gd="Tha sinn sgìth" />
          <HoverBox en="She is happy" gd="Tha i toilichte" />
          <HoverBox en="They are not sad" gd="Chan eil iad brònach" />
          <HoverBox en="Is he small?" gd="A bheil e beag?" />
          <HoverBox en="Aren't we big?" gd="Nach eil sinn mòr?" />
        </>
      );
      break;
    case 4:
      return (
        <>
          <p>
            Lastly for this lesson, we&rsquo;re going to learn a handful of very
            useful words to allow us to make more interesting sentences:
          </p>
          <VocabGrid words={["but", "ach", "and", "agus", "because", "oir"]} />

          <p>
            We&rsquo;ll come across some joining words that <em>do</em> affect
            the other parts of the sentence, but these ones don&rsquo;t. That
            means you can use them to just connect to sentences easily:
          </p>

          <MathBox
            one="Tha mi sgìth"
            two="Tha mi brònach"
            three={
              <>
                Tha mi sgìth <b>oir</b> tha mi brònach
              </>
            }
          />

          <MathBox
            one="Chan eil iad mòr"
            two="Tha iad ag òl"
            three={
              <>
                Chan eil iad mòr <b>ach</b> tha iad ag òl
              </>
            }
          />

          <MathBox
            one="Tha Calum beag"
            two="Tha e brònach"
            three={
              <>
                Tha Calum beag <b>agus</b> tha e brònach
              </>
            }
          />
        </>
      );
      break;
    case 5:
      return (
        <div className="recapBox">
          <ul>
            <li>
              The verb <em>to be</em> can be represented by this chart:
            </li>
          </ul>
          <Table
            row1={["Tha - to be", "! (statement)", "? (question)"]}
            row2={["+ (positive)", "tha", "a bheil?"]}
            row3={["- (negative)", "chan eil", "nach eil?"]}
          />
        </div>
      );
      break;
    default:
      return <></>;
  }
};

export const Content = ({ step }) => <StepContent step={step} />;

export const Questions = () => {
  return (
    <>
      <h3>
        Let's start by practicing the vocabulary we've learned in this level:
      </h3>
      <Studier words={WORDS.filter((word) => word.lesson == 2)[0].words} />

      <h3>Try putting these sentences in the right order:</h3>

      <Dragger sentence="tha i mòr" />

      <Dragger sentence="a bheil sinn brònach?" />


      <Dragger sentence="chan eil sibh toilichte" />


      <Dragger sentence="nach eil iad beag?" />

    </>
  );
};
