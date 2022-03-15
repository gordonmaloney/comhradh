import { Step } from "@mui/material";

export const title = ["Tha, Chan eil"]

export const steps = ["Tha", "Other people", "Chan eil", "Recap"];

export const StepContent = ({ step }) => {
    console.log("step: ", step)
  switch (step) {
    case 1:
      return (
        <div>
          <p>
            Let&rsquo;s start by learning four words:
            <br />
            Mi - I, me
            <br />
            Tha - am
            <br />
            M&ograve;r - big
            <br />
            Beag - small
          </p>
          <p>
            But before we can make a sentence with them, we need to understand
            that the order that words go in when you&rsquo;re speaking Gaelic is
            a little different from English.
          </p>
          <p>
            In English, you would say:
            <br />I am big
          </p>
          <p>
            But in Gaelic, that same sentence would be:
            <br />
            Tha mi m&ograve;r
          </p>
          <p>
            So you see that in Gaelic, the verb comes before the subject. That
            will take a moment to get used to, but the good news is that
            it&rsquo;s like that in pretty much every construction in Gaelic, so
            it will be second nature before you know it.
          </p>
          <p>
            So if:
            <br />
            Tha mi m&ograve;r
          </p>
          <p>
            Means:
            <br />I am big
          </p>
          <p>
            And <em>beag</em> means <em>small</em>, can you work out the Gaelic for this?
            <br />I am small
          </p>
        </div>
      );
      break;
    case 2:
      return (
        <>
          <p>
            Let&rsquo;s start by learning a couple other words and common names:
            <br />
            Thu - you
            <br />
            Anna - Anne
            <br />
            Calum - Callum
            <br />
            Iain - John
            <br />
            M&ograve;rag - Morag
          </p>
          <p>
            In English, as well as many other languages, verbs change their form
            depending on who or what they are attached to. So we have:
          </p>
          <ul>
            <li>
              I <em>am</em>
            </li>
            <li>
              You <em>are</em>
            </li>
            <li>
              She <em>is</em>
            </li>
          </ul>
          <p>
            In Gaelic, however, verbs are much, much simpler, and stay the same
            no matter who or what they refer to. That means that you can use the
            word <em>tha</em> to describe anyone or anything.
          </p>
          <p>
            Tha mi m&ograve;r - I am big
            <br />
            Tha thu beag - You are small
            <br />
            Tha Calum m&ograve;r - Callum is big
          </p>
          <p>
            That means <em>tha</em> could be translated as <em>am</em>,{" "}
            <em>are</em>, or <em>is</em> depending on context. Much easier than
            English!
          </p>{" "}
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
          <p>
            Again this is really easy - you simply replace &ldquo;<em>tha</em>
            &rdquo; with &ldquo;<em>chan eil</em>&rdquo; - everything else about
            the sentence remains the same.
          </p>
          <p>
            Tha mi m&ograve;r - I am big
            <br />
            Chan eil mi m&ograve;r - I am not big
          </p>
          <p>
            And just like with the word &lsquo;<em>tha</em>&rsquo;, this is the
            same no matter who or what you are talking about.
          </p>
          <p>
            Tha Anna beag - Anna is small
            <br />
            Chan eil Anna beag - Anna is not small
          </p>
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
          <p>
            Sg&igrave;th - tired
            <br />
            Br&ograve;nach - sad
            <br />
            Toilichte - happy
          </p>
        </>
      );
      break;
    case 4:
      return (
        <>
          <ul>
            <li aria-level="1">
              The word-order in Gaelic is different to English, and for the
              sentences we&rsquo;ve looked at here goes{" "}
              <em>verb-subject-adjective</em> (as opposed to English, which is{" "}
              <em>subject-verb-adjective)</em>
            </li>
            <li aria-level="1">
              The verb <em>tha</em> doesn&rsquo;t change depending on the person
              or thing
            </li>
          </ul>
          <p>
            The negative version of <em>tha</em> is <em>chan eil</em>, but
            everything else about the sentence stays the same
          </p>
        </>
      );
      break;
    default:
      return <></>;
  }
};

export const Content = ({step}) => {return (<><StepContent step={step} /></>)}