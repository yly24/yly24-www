/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio" style={{ display: "flex" }}>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../assets/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
        style={{ borderRadius: "50%" }}
      />
      <div style={{ marginLeft: 10 }}>
        <div style={{ maxWidth: 310 }}>
          Personal blog by{" "}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            target="__blank"
          >
            {author.name}
          </a>
          .
        </div>
        <div style={{ maxWidth: 310 }}>{author?.summary || null}</div>
      </div>
    </div>
  )
}

export default Bio
