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

export const title = "The (masculine)";

export const steps = ["An", "An t-", "Am", "Recap"];

export const StepContent = ({ step }) => {
  console.log("step: ", step);
  switch (step) {
    case 1:
      return (
        <>
          <p>
            In the last lesson, we learnt that Gaelic has no <em>indefinite</em>{" "}
            article - <em>a </em>or <em>an</em> in English. It does, though,
            have a <em>definite </em>article <em>the</em>. This is a little
            different from English though, so we will take it slowly.
          </p>
          <p>
            Firstly, for <em>most</em> masculine words, the word <em>the</em>{" "}
            is: <em>an</em>
          </p>
          <p>
            If we look back at some of the words we&rsquo;ve already learnt, we
            can see how easy that is:
          </p>
          <VocabGrid
            words={[
              "the book",
              "an leabhar",
              "the house",
              "an taigh",
              "the man",
              "an duine",
              "the friend",
              "an caraid",
              "the dog",
              "an cù",
              "the cat",
              "an cat",
            ]}
          />
          <p>
            However, there are two cases where the article changes a little.
            Let&rsquo;s take these one-by-one because they are less complicated
            than they seem.
          </p>
          <p>
            We&rsquo;ve already seen how Gaelic grammar reflects the way people
            speak - in a flowing, natural way, and this is the same.
          </p>
        </>
      );
      break;
    case 2:
      return (
        <>
          <VocabGrid words={["the water", "an t-uisge"]} />
          <p>
            As we&rsquo;ve seen, before masculine nouns beginning with a vowel,
            the definite article becomes <em>an t-</em>
          </p>
          <p>
            From time to time throughout the course, you&rsquo;ll see
            explanations for <em>why</em> things are the way they are. You
            don&rsquo;t need to know these explanations to speak the language
            fluently - lots of native speakers won&rsquo;t be consciously aware
            of them - but they might help you remember. Feel free to ignore the
            explanations if you want, though!
          </p>
          <p>
            <br />
            <em>Explanation: </em>The explanation for this is that the original
            word for <em>the</em> ended in <em>t</em>, but just like we drop the{" "}
            <em>g</em> from <em>ag</em> before verbs that start with consonants
            (<em>a&rsquo; leughadh</em> vs <em>ag &ograve;l)</em>, we drop the{" "}
            <em>t</em> from masculine articles before nouns that start with
            consonants. That&rsquo;s simply because saying two consonants next
            two each other can break up the flow of a sentence a little.
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <VocabGrid words={["the food", "am biadh"]} />
          <p>
            The article <em>an</em> becomes <em>am</em> before the letters B, F,
            M and P - like <em>am biadh</em>.
          </p>
          <p>
            <em>Explanation: </em>Some people use the acronym &ldquo;big fat
            member of parliament&rdquo; to remember this, but there is also a
            linguistic explanation. Just like we&rsquo;ve seen before, this is
            also about making the sentence flow more easily, and this is
            actually something we have in English too.
          </p>
          <p>
            The sounds <em>n</em> and <em>m </em>are very similar (think how
            confusing it can be spelling something out over the phone), but the
            main difference is that when you say <em>m</em>, your lips are
            touching each other. Your lips are also touching each other when you
            make the sounds B, F and P. These are called <em>bilabial</em>{" "}
            sounds (bi- - two, -labial - lips). So in Gaelic, and lots of other
            languages, the <em>n</em> sound sometimes becomes <em>m</em> before
            another <em>bilabial</em> sound.
          </p>
          <p>
            Lots of English words have the Latin prefix <em>con-</em>:{" "}
            <em>con</em>sider, <em>con</em>dition, con<em>tain</em> etc etc. But
            if the next letter is <em>bilabial</em>, that often becomes{" "}
            <em>com-</em>: <em>com</em>bine, <em>com</em>fort, <em>com</em>
            miserate, <em>com</em>plain.
          </p>
          <p>
            <br />
            Again, this is just just about making the language easier to speak.
            If you try to say &ldquo;an biadh&rdquo; over and over again, sooner
            or later it&rsquo;ll come out as <em>am</em>.
          </p>
        </>
      );
      break;
    case 4:
      return (
        <div className="recapBox">
          <ul>
            <li aria-level="1">
              The masculine article is usually <em>an</em>
            </li>
            <li aria-level="1">
              Before a word starting with a vowel, it is <em>an t-</em>
            </li>
            <li aria-level="1">
              Before a word starting with BFMP, it is <em>am</em>
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
      <Studier words={WORDS.filter((word) => word.lesson == 5)[0].words} />

      <h3>Now put these sentences in order:</h3>

      <Selecter text={"Tha "} options={["an", "am", "an t-"]} correct="am" textCont=" biadh blàth" />
    </>
  );
};
