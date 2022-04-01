import { useState } from "react";
import { Step } from "@mui/material";
import { TransTable, VocabGrid, Title } from "./LessonComponents";
import { Dragger, Qtranslate, Qtranslate1, Selecter } from "./TestComponents";
import { Grid } from "@mui/material";
import { PronunciationCentre } from "../PronunciationCenter/PronunciationCentre";
import { Link } from "react-router-dom";
import { WORDS } from "./WORDS";

import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Studier } from "../Flashcards/Studier";

export const title = ["Tha, Chan eil"];

export const steps = ["Tha", "Other people", "Chan eil", "Recap"];

export const Recap = () => {
  console.log("test");
  return <StepContent step={steps.length} />;
};

export const StepContent = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <div>
          <p>Let&rsquo;s start by learning four words:</p>
          <VocabGrid
            words={[
              "is/am/are",
              "tha",
              "me/I",
              "mi",
              "big",
              "mòr",
              "small",
              "beag",
            ]}
          />
          <p>
            You can click on the word to hear it pronounced (and practice
            pronouncing it yourself), and where you see a wee <sup>m</sup>, you
            can hover over it to get a tip to help you memorise it.
          </p>
          <p>
            But before we can make a sentence with them, we need to understand
            that the order that words go in when you&rsquo;re speaking Gaelic is
            a little different from English.
          </p>
          <p>
            In English, you would say:
            <br />
            <span className="ex">
              <span className="engEx">I am big</span>
            </span>
          </p>
          <p>
            But in Gaelic, that same sentence would be:
            <br />
            <span className="ex">
              <span className="gdEx">Tha mi mòr</span>
            </span>
          </p>
          <p>
            But the literal, word-for-word translation of this would be:
            <br />
            <span className="ex">
              <span className="explainer">am I big</span>
            </span>
          </p>
          From time to time, we'll show you these kinds of literal,
          word-for-word translations of the Gaelic, to help you understand
          what's happening. For this sentence, that would look like:
          <br />
          <table className="word4word">
            <tr>
              <td>English:</td>
              <td>I</td>
              <td>am</td>
              <td>big</td>
            </tr>
            <tr className="gdTab">
              <td>Gaelic:</td>
              <td>tha</td>
              <td>mi</td>
              <td>mòr</td>
            </tr>
            <tr className="exTab">
              <td>Literal:</td>
              <td>am</td>
              <td>I</td>
              <td>big</td>
            </tr>
          </table>
          <p>
            So you see that in Gaelic, the verb comes before the subject. That
            will take a moment to get used to, but the good news is that
            it&rsquo;s like that in pretty much every construction in Gaelic, so
            it will be second nature before you know it.
          </p>
          <p>
            So if:
            <br />
            <span className="ex">
              <span className="gdEx">Tha mi mòr</span>
            </span>
          </p>
          <p>
            Means:
            <span className="ex">
              <span className="engEx">I am big</span>
            </span>
          </p>
          <p>
            <br />
            And <b>beag</b> means <em>small</em>, can you work out the Gaelic
            for this?
            <br />
            <span className="hovBox">
              <span className="hoxBoxInner">
                <span className="hovEng">I am small</span>
                <br />
                <span className="hoverRev hovGd">Tha mi beag</span>
                <span className="helperText">Hover to reveal</span>
              </span>
            </span>
          </p>
          Now try putting these sentences in the right order:
          <Dragger sentence="tha mi beag" handleCorrect={() => {console.log("handling")}} />
          <Dragger sentence="tha thu mòr"  />
          <Dragger sentence="tha thu beag"  />
          <Dragger sentence="tha mi mòr" />
        </div>
      );
      break;
    case 2:
      return (
        <>
          <p>
            Let&rsquo;s start by learning a couple other words and common names:
          </p>
          <VocabGrid
            words={[
              "you",
              "thu",
              "Anne",
              "Anna",
              "John",
              "Iain",
              "Callum",
              "Calum",
              "Morag",
              "Mòrag",
            ]}
          />

          <p>
            In English, as well as many other languages, verbs change their form
            depending on who or what they are attached to. So we have:
          </p>
          <span className="ex">
            <span className="engEx">
              I <i>am</i>
              <br />
              You <i>are</i>
              <br />
              She <i>is</i>
              <br />
              <i>etc</i>
            </span>
          </span>
          <p>
            In Gaelic, however, verbs are much, much simpler, and stay the same
            no matter who or what they refer to. That means that you can use the
            word <em>tha</em> to describe anyone or anything.
          </p>
          <Grid container className="transTable">
            <Grid item xs={6} className="transTableGd">
              Tha mi mòr
            </Grid>
            <Grid item xs={6} className="transTableEn">
              I am big
            </Grid>
            <Grid item xs={6} className="transTableGd">
              Tha thu beag
            </Grid>
            <Grid item xs={6} className="transTableEn">
              You are small
            </Grid>
            <Grid item xs={6} className="transTableGd">
              Tha Calum mòr
            </Grid>
            <Grid item xs={6} className="transTableEn">
              Callum is big
            </Grid>
          </Grid>
          <p>
            That means <em>tha</em> could be translated as <em>am</em>,{" "}
            <em>are</em>, or <em>is</em> depending on context. Much easier than
            English!
          </p>
        </>
      );
      break;
    case 3:
      return (
        <>
          <p>
            So we&rsquo;ve learned how to say someone or something <em>is</em>,
            but how do we say they <em>are not</em>?
          </p>
          <VocabGrid words={["isn't/aren't/am not", "chan eil"]} />
          <p>
            Again this is really easy - you simply replace &ldquo;<em>tha</em>
            &rdquo; with &ldquo;<em>chan eil</em>&rdquo; - everything else about
            the sentence remains the same.
          </p>

          <TransTable
            words={[
              "Tha mi mòr",
              "I am big",
              "Chan eil mi mòr",
              "I am not big",
            ]}
          />

          <p>
            And just like with the word &lsquo;<em>tha</em>&rsquo;, this is the
            same no matter who or what you are talking about.
          </p>

          <TransTable
            words={[
              "Tha Anna beag",
              "Anna is small",
              "Chan eil Anna beag",
              "Anna is not small",
            ]}
          />

          <p>
            So just like <em>tha</em>, this means that <em>chan eil</em> cold be
            translated as <em>am not, are not</em> or <em>is not</em> depending
            on the context.
          </p>
          <p>
            Now that we&rsquo;ve learned how to describe what something or
            someone <em>is</em> or <em>isn&rsquo;t</em>, it&rsquo;s time to
            learn a few more words. The good news is that you can just slot in
            any other adjective you like into this structure. Here are a couple
            more useful ones:
          </p>
          <VocabGrid
            words={["tired", "sgìth", "happy", "toilichte", "sad", "brònach"]}
          />

          <p>Now let's try these words out with a couple exercises:</p>

          <Dragger sentence="chan eil Anna sgìth" />
          <Dragger sentence="tha Calum toilichte" />
          <Dragger sentence="chan eil mi brònach" />
        </>
      );
      break;
    case 4:
      return (
        <>
          <div className="recapBox">
            <ul>
              <li aria-level="1">
                The word-order in Gaelic is different to English, and for the
                sentences we&rsquo;ve looked at here goes{" "}
                <em>verb-subject-adjective</em> (as opposed to English, which is{" "}
                <em>subject-verb-adjective)</em>
              </li>
              <li aria-level="1">
                The verb <em>tha</em> doesn&rsquo;t change depending on the
                person or thing
              </li>
              <li>
                The negative version of <em>tha</em> is <em>chan eil</em>, but
                everything else about the sentence stays the same
              </li>
            </ul>
          </div>
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
  const [selectValue, setSelectValue] = useState("Select...");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  return (
    <>

    <Selecter text="Tha mi " options={["sgith", "sgìth"]} correct="sgìth" textCont="." handleCorrect={() => {console.log("handling correct")}}/>

    <Selecter text="Tha mi " options={["sgith", "sgìth"]} correct="sgìth" textCont="." />

      Let's start by practicing the vocabulary we've learned in this level:
      <Studier words={WORDS.filter((word) => word.lesson == 1)[0].words} />
      <h3>Translate from Gaelic to English:</h3>
      <Qtranslate1 Q="Tha mi beag" A={["I am small", "I'm small"]} handleCorrect={() => console.log("handling correct")} />
      <Qtranslate1
        Q="Chan eil Anna brònach"
        A={["Anna isn't sad", "Anna's not sad", "Anna is not sad"]}
      />
      <Qtranslate1 Q="Tha mi mòr`" A={["I am big", "I'm big"]} />
      <Qtranslate1
        Q="Chan eil Iain sgìth"
        A={["Iain isn't tired", "Iain's not tired", "Iain is not tired"]}
      />
      <Qtranslate1 Q="Tha Mòrag beag" A={["Morag is small", "Mòrag's small"]} />
      <h3>Translate from English to Gaelic:</h3>
      <Qtranslate1 Q="I am tired" A={["Tha mi sgìth"]} />
      <Qtranslate1 Q="I am not small" A={["Chan eil mi beag"]} />
      <Qtranslate1 Q="Morag isn't big" A={["Chan eil Mòrag mòr"]} />
      <Qtranslate1 Q="Iain is small" A={["Tha Iain beag"]} />
      <Qtranslate1 Q="Anna isn't sad" A={["Chan eil Anna brònach"]} />
    </>
  );
};
