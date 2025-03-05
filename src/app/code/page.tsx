import { CodepenEmbed } from "@/components/code/CodepenEmbed";
import Link from "next/link";

export default function Page() {
  return (
    <div className="text-xl flex flex-col gap-4">
      <p className="text-3xl mb-8">
        I write code for <b className="text-red-500">internet</b>{" "}
        <i className="text-blue-500">computer</i> interfaces
      </p>
      <p>
        I work full time as a Senior Software Engineer at{" "}
        <Link
          href="https://aimi.fm"
          className="text-amber-500 hover:opacity-75 hover:text-teal-500 transition-all"
        >
          Aimi.fm
        </Link>
      </p>
      <p>
        I&apos;m also working on building an app for namers{" "}
        <Link
          href="https://app.whatsoever.biz"
          className="text-teal-500 hover:opacity-75 hover:text-amber-500 transition-all"
        >
          Whatsoever.biz
        </Link>
      </p>
      <p>
        I have been known to mess around on{" "}
        <Link
          href="https://codepen.io/eljamez"
          className="text-purple-500 hover:opacity-75 hover:text-pink-500 transition-all"
        >
          Codepen.io
        </Link>
      </p>
      <CodepenEmbed />
      <script
        async
        src="https://public.codepenassets.com/embed/index.js"
      ></script>
      <p>
        I also have a profile on the social media platform for networking{" "}
        <Link
          href="https://www.linkedin.com/in/eljamez/"
          className="text-blue-500 hover:opacity-75 hover:text-gray-500 transition-all"
        >
          LinkedIn
        </Link>
      </p>

      {/* <p>
        For more professional information feel free to visit my website devoted
        to coding{" "}
        <Link
          href="https://jamescript.com"
          className="text-yellow-500 hover:opacity-75 hover:text-blue-500 transition-all"
        >
          Jamescript.com
        </Link>
      </p> */}
    </div>
  );
}
