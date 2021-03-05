import moment from "moment"
import React from "react"
import { markdown } from "../styles/markdown.module.css"

export function articleTimestamp(date) {
  return moment(date).local().format(`hh:mm MM/DD/YYYY`)
}

export const ToC = ({ title, tableOfContents }) => (
  <div className="md:float-right rounded-lg border border-gray-400 p-4 md:ml-4 mb-2 poc">
    <div className="font-bold mb-2">{title}</div>
    <div
      dangerouslySetInnerHTML={{
        __html: tableOfContents,
      }}
    />
  </div>
)

export const AskUsAnything = ({ title }) => {
  return (
    <div className={markdown}>
      <h2>Ask us anything!</h2>
      <div>
        <p>
          We hope that you enjoyed this article and found it informative. As
          always, if you have any questions or if you would like to get in
          touch, feel free to connect with us on Twitter{" "}
          <a href="https://twitter.com/rmgn" target="_blank">
            @rmgn
          </a>
          .
        </p>
        <p>
          If you feel any of this information is incorrect or outdated, please
          email us at{" "}
          <a
            href={`mailto:info@somedomain.com?subject=question/comment about article: ${title}`}
            target="_blank"
          >
            info@somedomain.com
          </a>{" "}
          with the article title and any additional information.
        </p>
      </div>
    </div>
  )
}
