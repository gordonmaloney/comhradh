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

export const Recap = () => {
  return <StepContent step={steps.length} />;
};

export const title = "Past tense";

export const steps = [
  "Bha",
  "Was not, were?",
  <>
    Doing <i>things</i>
  </>,
  "Recap",
];

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <>
          <p>
            In the first lesson, we came across this chart for the verb{" "}
            <em>to be </em>in the <em>present tense</em>:
          </p>
          <Table
            row1={["Tha - to be", "! (statement)", "? (question)"]}
            row2={["+ (positive)", "tha", "a bheil?"]}
            row3={["- (negative)", "chan eil", "nach eil?"]}
          />
          <p>
            It showed us that there are four forms for the verb, depending on if
            it&rsquo;s positive or negative, and a question or a statement.
          </p>
          <p>
            To make a sentence in the <em>past tense </em>- <em>was</em> instead
            of <em>is</em> - all we have to do is change the form of the verb.
            Everything else in the sentence stays the same. To ease our way in,
            we&rsquo;ll begin by learning the <em>past tense</em> of{" "}
            <em>tha</em>: <em>bha</em>:
          </p>
          <VocabGrid words={["was", "bha"]} />
          <p>
            Can you try turning the below sentences, which are written in the
            present tense, into the past tense?
          </p>
          <Qtranslate1 Q="Tha e sgìth" A={["Bha e sgìth"]} />

          <Qtranslate1 Q="Tha Anna a' cadal" A={["Bha Anna a' cadal"]} />

          <Qtranslate1
            Q="Tha Iain a' cuideachadh"
            A={["Bha Iain a' cuideachadh"]}
          />

          <Qtranslate1 Q="Tha iad brònach" A={["Bha iad brònach"]} />

          <Qtranslate1 Q="Tha iad brònach" A={["Bha iad brònach"]} />

          <Qtranslate1
            Q="Tha Mòrag a' coiseachd"
            A={["Bha Mòrag a' coiseachd"]}
          />

          <Qtranslate1 Q="Tha sibh toilichte" A={["Bha sibh toilichte"]} />
        </>
      );
      break;
    case 2:
      return (
        <>
          <VocabGrid
            words={[
              "wasn't, weren't",
              "cha robh",
              "were? was?",
              "an robh?",
              "weren't? wasn't?",
              "nach robh?",
            ]}
            helper={[
              <>
                Though the <i>bh</i> in <i>bha</i> is pronounced like a <i>v</i>
                , it is silent in the word <i>robh</i>.
              </>,
            ]}
          />
          <p>
            We&rsquo;ve learned that <em>bha</em> is the past tense of{" "}
            <em>tha</em> - easy. You can remember this because <em>b</em> comes
            before <em>t</em> in the alphabet, if that helps.
          </p>
          <p>
            But what about the other forms - the negative and the question
            forms? The full chart looks like this:
          </p>
          <Table
            row1={["To be - past tense", "! (statement)", "? (question)"]}
            row2={["+ (positive)", "bha", "an robh?"]}
            row3={["- (negative)", "cha robh", "nach robh?"]}
          />
          <p>
            As you can see, all of the other forms include the word{" "}
            <em>robh</em>. Don&rsquo;t worry about it too much for now, but this
            is how most verbs in Gaelic work. Generally, you have:
          </p>
          <ul>
            <li aria-level="1">
              The &lsquo;independent&rsquo; part of it - <em>bha</em> in this
              case, where it is on its own - i.e. independent of any other
              little words
            </li>
            <li aria-level="1">
              And the &lsquo;dependent&rsquo; part of it - <em>robh</em> in this
              case, where it goes <em>with</em> another wee word.
            </li>
          </ul>
          <p>
            Those other wee words - <em>cha, an, </em>and <em>nach</em> - are
            fairly regular, and we&rsquo;ll come across them in a lot more over
            time. In fact, we&rsquo;ve already come across forms of them in{" "}
            <em>a</em>
            <em> bheil?, </em>
            <em>chan</em>
            <em> eil</em>, and <em>nach</em>
            <em> robh?</em>
          </p>
          <p>
            Don&rsquo;t worry about that too much for now - we will get lots of
            practice with this in a moment and then the forms of the verb will
            become completely second nature.
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            The last thing to cover in this lesson is <em>objects</em>.
            We&rsquo;ve learnt how to say things like &ldquo;
            <em>a man is reading</em>&rdquo; or &ldquo;<em>a book is big</em>
            &rdquo;, but what if we want to say &ldquo;
            <em>a man is reading a book</em>&rdquo;?
          </p>
          <p>
            The good news is that it couldn&rsquo;t be easier - for this
            structure, you simply add the <em>object</em> to the end:
          </p>
          <p>
            <em>
              Tha duine a&rsquo; leughadh&hellip; leabhar - A man is
              reading&hellip;. A book
            </em>
          </p>
          <p>
            Before we start making sentences with these and practicing,
            we&rsquo;re going to learn two extremely useful words, and three
            more extremely useful verbs:
          </p>
          <VocabGrid
            words={[
              "something",
              "rudeigin",
              "someone",
              "cuideigin",
              "doing, making",
              "a' dèanamh",
              "buying",
              "a' ceannachd",
              "wanting",
              "ag iarraidh",
            ]}
          />
          <p>Try to work these out to see how this works:</p>

          <HoverBox
            en="A bheil thu ag iarraidh rudeigin?"
            gd="Are you wanting something?"
          />
          <HoverBox
            en="Bha mi a&rsquo; cuideachadh cuideigin"
            gd="I was helping someone"
          />
          <HoverBox
            en="An robh iad a&rsquo; d&egrave;anamh biadh?"
            gd="Were they making food?"
          />
          <HoverBox
            en="Cha robh e a&rsquo; ceannachd leabhar"
            gd="He wasn't buying a book"
          />
          <HoverBox
            en="Tha c&ugrave; ag iarraidh uisge"
            gd="A dog is wanting water"
          />
        </>
      );
      break;
    case 4:
      return (
        <div className="recapBox">
          <ul>
            <li>
              The past tense of the verb to be can be represented with this
              chart:              
            </li>
            </ul>
            <Table
                row1={["To be - past tense", "! (statement)", "? (question)"]}
                row2={["+ (positive)", "bha", "an robh?"]}
                row3={["- (negative)", "cha robh", "nach robh?"]}
              />
              <ul>
            <li aria-level="1">
              To put an <i>indefinite</i> object into a sentence, we simply add
              it after the verbal noun
            </li>
          </ul>
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
      <Studier words={WORDS.filter((word) => word.lesson == 4)[0].words} />

      <h3>Now put these sentences in order:</h3>

      <Dragger sentence="bha e ag iarraidh rudeigin" prompt="He was wanting something" />

      <Dragger sentence="an robh cù a' leughadh leabhar ?" prompt="Was a dog reading a book?" />

      <Dragger sentence="cha robh i ag iarraidh biadh agus cha robh mi ag iarradh uisge" prompt="She wasn't wanting food and I wasn't wanting water" />

    </>
  );
};
